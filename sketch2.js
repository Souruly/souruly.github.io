var Birds = [];
var Obstacles = [];
var numberOfBirds = 40;
var numberOfObstacles = 10;
var WIDTH = 800;
var HEIGHT = 600;

var attractSlider;
var alignSlider;
var seperateSlider;
var repelSlider;

function setup()
{
  createCanvas(1200,HEIGHT);
  for(var i=0 ; i<numberOfBirds ; i++)
  {
      var x = random(0,WIDTH);
      var y = random(0,HEIGHT);
      var b = new Bird(x,y);
      Birds.push(b);
  }
  angleMode(DEGREES);
  setPoints();
  angleMode(RADIANS);
  attractSlider = createSlider(0,20,1.0,0.5);
  attractSlider.position(900,55);
  seperateSlider = createSlider(0,20,1.5,0.5);
  seperateSlider.position(900,105);
  alignSlider = createSlider(0,20,1.0,0.5);
  alignSlider.position(900,155);
  repelSlider = createSlider(0,20,20.0,0.5);
  repelSlider.position(900,205);
}

function draw()
{
   background(51);
   stroke(255);
   strokeWeight(2);
   line(0,0,WIDTH,0);
   line(0,0,0,HEIGHT);
   line(0,HEIGHT,WIDTH,HEIGHT);
   line(WIDTH,HEIGHT,WIDTH,0);
   noStroke();
   fill(240);
   textSize(20);
   text("Long Range Attraction",900,50);
   text("Short Range Repulsion",900,100);
   text("Alignment",900,150);
   text("Obstacle Detection",900,200);
   var s = "Click anywhere to add new obstacles";
   text(s, 900, 300, 320, 400);

   for(var i=0;i<Birds.length;i++)
   {
       Birds[i].show();
       Birds[i].update(Birds,Obstacles);
   }
   for(var i=0;i<Obstacles.length;i++)
   {
       Obstacles[i].show();
   }
}

function mousePressed()
{
  var x = pmouseX;
  var y = pmouseY;
  if(x>0 && x<800 && y>0 && y<600)
  {
    var o = new Obstacle(pmouseX,pmouseY);
    Obstacles.push(o);
  }
}

function setPoints()
{
  var centre = createVector(400,300);
  var radius = 200;
  var c = new Obstacle(centre.x,centre.y);
  Obstacles.push(c);
  for(var i=0;i<360;i+=5)
  {
    var theta = i;
    var x = radius*cos(theta);
    var y = radius*sin(theta);
    var p = new Obstacle(centre.x+x,centre.y+y);
    Obstacles.push(p);
  }
}
