let drawButton;
let link;
let drawing = false;
let numberOfSegments = 3;
let segments = [];
let angles = [];
let points = [];

function setup()
{
  createCanvas(1200,600);
  ellipseMode(RADIUS);
  textAlign(CENTER,TOP);
  rectMode(CORNERS);
  angleMode(DEGREES);
  background(240);

  drawButton = createButton("DRAW!");
  drawButton.position(870,230);
  drawButton.mousePressed(changeView);
  let l = floor(280/numberOfSegments);
  console.log(l);
  //startX,startY,length,angle,index
  let seg0 = new Segment(300,300,l,0,0);
  seg0.getInitialEndPoint();
  segments.push(seg0);
  for(let i=1 ; i<numberOfSegments ; i++)
  {
    let parent = segments[i-1];
    let seg = new Segment(parent.endPoint.x,parent.endPoint.y,l,0,i);
    seg.getInitialEndPoint();
    segments.push(seg);
  }

  // let a = 4.01;
  // angles.push(a);
  // a = 5;
  // angles.push(a);
  // a = 0;
  // angles.push(a);
  for(let i=0 ; i<numberOfSegments ; i++)
  {
    let a = round(random(-6,6));
    if(i==0)
    {
      a += random(-0.05,0.05);
    }
    angles.push(a);
  }

  link = createA('https://github.com/Souruly/souruly.github.io/blob/master/README.md','GITHUB REPO','_blank');
  link.position(850,490);

}

function draw()
{
  background(240);

  fill(0);
  noStroke();
  textSize(40);
  textStyle(BOLD);
  text("GENERATIVE ART",900,0);
  textStyle(NORMAL);
  textSize(18);
  //text("A LOW RES. SIMULATION FOR STATIC CHARGE STRUCTURE",900,42);
  text("Press this button to start drawing.",900,200);
  stroke(0);
  //line(900,0,900,600);
  strokeWeight(5);
  line(600,70,1200,70);
  strokeWeight(3);
  line(600,450,1200,450);

  for(let i=0 ; i<numberOfSegments ; i++)
  {
    segments[i].show();
  }

  if(drawing)
  {
    let l = segments.length;
    let p = new Point(segments[l-1].endPoint.x,segments[l-1].endPoint.y);
    points.push(p);

    noFill();
    stroke(0);
    strokeWeight(1);
    beginShape();
    for(let i=0 ; i<points.length ; i++)
    {
      vertex(points[i].x,points[i].y);
    }
    endShape();
  }

  for(let i=0 ; i<numberOfSegments ; i++)
  {
    segments[i].update(angles[i],segments);
  }
  drawBorders();
}

function changeView()
{
  if(drawing==false)
  {
    drawing = true;
  }
}


function drawBorders()
{
  stroke(0);
  strokeWeight(5);
  line(1,1,600-1,1);
  line(600-1,1,600-1,height-1);
  line(600-1,height-1,1,height-1);
  line(1,height-1,1,1);
}
