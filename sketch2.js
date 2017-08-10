//ArrayList<Eye> Eyes = new ArrayList();

var eyes = [];
var defaultTimerValue = 20;
var timer = defaultTimerValue;
var blinkTime = timer;
var drag = false;

function setup()
{
  createCanvas(1000,600);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  frameRate(60);
  var e = new Eye(800,500,100,20);
  eyes.push(e);
}
function draw()
{
  background(248);

  stroke(0);
  strokeWeight(4);
  line(2,2,2,598);
  line(2,598,598,598);
  line(600,600,600,2);
  line(600,2,2,2);

  noStroke();
  fill(0);
  textSize(32);
  var msg1 = "Click to blink";
  text(msg1,650,50,350,300);
  var msg2 = "Drag and drop this eye anywhere on the left to add new eyes";
  text(msg2,650,200,350,300);

  var mouse = new createVector(pmouseX,pmouseY);
  for(var i=0 ; i<eyes.length ; i++)
  {
    eyes[i].show(timer);
    if(timer<blinkTime)
    {
      timer++;
    }
    eyes[i].update(mouse);
  }

  if(drag==true)
  {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(pmouseX,pmouseY,100,100);
    fill(0);
    ellipse(pmouseX,pmouseY,50,50);
  }
}

function mousePressed()
{
  if(pmouseX<900 && pmouseX>700 && pmouseY<600 && pmouseY>400)
  {
    drag = true;
  }
  else
  {
    timer = 0;
  }
}

function mouseReleased()
{
  if(pmouseX<600 && pmouseX >0 && pmouseY<600 && pmouseY>0)
  {
    if(drag==true)
    {
      var e = new Eye(pmouseX,pmouseY,100,round(random(10,20)));
      eyes.push(e);
      drag = false;
    }
  }
}
