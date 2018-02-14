let drawButton;
let link;
let drawing = false;
let numberOfSegments = 3;
let segments = [];
let points = [];
let buffer;
let px,py,tx,ty;

let slider1,slider2,slider3;
let sliders = [];
function setup()
{
  createCanvas(1200,600);
  ellipseMode(RADIUS);
  textAlign(CENTER,TOP);
  rectMode(CORNERS);
  angleMode(DEGREES);
  background(240);

  drawButton = createButton("DRAW!");
  drawButton.position(870,250);
  drawButton.mousePressed(changeView);
  let initPosition;
  initPosition = round(random(-6,6));
  slider1 = createSlider(-6,6,initPosition,1);
  slider1.position(625,150);
  sliders.push(slider1);
  initPosition = round(random(-6,6));
  slider2 = createSlider(-6,6,initPosition,1);
  slider2.position(835,150);
  sliders.push(slider2);
  initPosition = round(random(-6,6));
  slider3 = createSlider(-6,6,initPosition,1);
  slider3.position(1040,150);
  sliders.push(slider3);

  //startX,startY,length,angle,index
  let seg0 = new Segment(300,300,60,0,0);
  seg0.getInitialEndPoint();
  segments.push(seg0);
  for(let i=1 ; i<numberOfSegments ; i++)
  {
    let parent = segments[i-1];
    let seg = new Segment(parent.endPoint.x,parent.endPoint.y,60,0,i);
    seg.getInitialEndPoint();
    segments.push(seg);
  }

  buffer = createGraphics(600, 600);
  buffer.background(240);

  //link = createA('https://github.com/Souruly/souruly.github.io/blob/master/README.md','GITHUB REPO','_blank');
  //link.position(850,490);

}

function draw()
{
  background(240);
  imageMode(CORNER);
  image(buffer, 0, 0, 600, 600);

  fill(0);
  noStroke();
  textSize(40);
  textStyle(BOLD);
  text("GENERATIVE ART",900,0);
  textStyle(NORMAL);
  textSize(18);
  text(slider1.value(),692,130)
  text(slider2.value(),900,130)
  text(slider3.value(),1107,130)
  text("Press this button to start drawing.",900,220);
  textStyle(BOLD);
  text("SET SPEEDS",900,100);
  stroke(0);
  // line(750,0,750,600);
  // line(900,0,900,600);
  // line(1050,0,1050,600);
  strokeWeight(5);
  line(600,70,1200,70);
  strokeWeight(3);
  line(600,450,1200,450);

  for(let i=0 ; i<numberOfSegments ; i++)
  {
    segments[i].show();
  }

  let l = segments.length;
  tx = segments[l-1].endPoint.x;
  ty = segments[l-1].endPoint.y;

  if(drawing)
  {
    buffer.stroke(0);
    if (frameCount > 1) {
      buffer.line(px, py, tx, ty);
    }
  }

  for(let i=0 ; i<numberOfSegments ; i++)
  {
    let angle = sliders[i].value();
    if(i==0)
    {
      angle += 0.01;
    }
    segments[i].update(angle,segments);
  }
  drawBorders();
  px = tx;
  py = ty;
}

function changeView()
{
  if(drawing==false)
  {
    drawing = true;
    for(let i=0 ; i<sliders.length ; i++)
    {
      sliders[i].hide();
    }
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
