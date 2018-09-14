
let center;
let bob1;
let bob2;
let gravity = 0.2;
let phase1 = [];
let phase2 = [];
let c1,c2;

function setup()
{
  createCanvas(800,500);

  center = createVector(width/2,100);
  c1 = color(255, 0, 0);
  c2 = color(0, 0, 255);
  bob1 = new Bob(PI/4, 100, c1);
  bob2 = new Bob(PI/4, 120, c2);
}

function draw()
{
  background(255);
  push();
  translate(center.x, center.y);
  rotate(PI/2);
  bob1.update();
  bob2.update();
  bob1.show();
  bob2.show();
  stroke(0);
  strokeWeight(2);
  line(0, 0, bob1.position.x, bob1.position.y);
  line(0, 0, bob2.position.x, bob2.position.y);
  pop();

  if(phase1.length>100)
  {
    phase1.splice(0,1);
    phase2.splice(0,1);
  }
  phase1.push(bob1.theta);
  phase2.push(bob2.theta);

  for(let i=0 ; i<phase1.length ; i++)
  {
      // let temp = p5.Vector.fromAngle(phase[i]);
      // temp.rotate(PI/2);
      // let angle = temp.heading();
      strokeWeight(4);
      stroke(c1);
      let angle = phase1[i];
      let x = 80 + (i*width/125) - 1;
      let y = height - 90 - (angle*80);
      point(x,y);

      stroke(c2);
      angle = phase2[i];
      x = 80 + (i*width/125) - 1;
      y = height - 90 - (angle*80);
      point(x,y);
  }

  noStroke(0);
  fill(0);
  textSize(12);
  text("Length 1 : " + floor(bob1.r),600,100);
  text("Initial Angle 1 : 90 deg",600,120);
  text("Length 2 : " + floor(bob1.r),600,140);
  text("Initial Angle 2 : 90 deg",600,160);

  textSize(32);
  text("Phase",100,300);
}
