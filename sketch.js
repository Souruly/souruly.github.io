var lineSet = [];
var car;
var fly;
var count = 0;
var xlen = 118;
var ylen = 1;
var p;
var X = 150 + xlen;
var Y = 200;

function setup() 
{
  createCanvas(600,600);
  fly = new Fly(200,500);
  car = new Car(200,500);
  ellipseMode(RADIUS);
  rectMode(CORNERS);
}

function draw() 
{
   background(240);
   
   p = fly.getCollisions();
   
   stroke(0);
   strokeWeight(1);
   fill(0);
   line(150,200,550,200);
   line(150,200,150,50);
   
   line(180,250,150,250);
   line(150,250,150,205);
   triangle(150,203,148,205,152,205);
   
   line(478,250,505,250);
   line(505,250,505,205);
   triangle(505,203,503,205,507,205);
   
   triangle(150,45,145,50,155,50);
   triangle(555,200,550,195,550,205);
   
   textSize(64);
   textAlign(CENTER,CENTER);
   text(fly.getCollisions(),300,300);
   textSize(16);
   text("Collision(s)",100,120);
   text("Time",330,220);
   text("Collision(s)",300,350);
   textSize(14);
   text("Time required for car to reach destination",330,248);
   fly.show();
   fly.update(car.position.x);
   car.show();
   car.update();
   
   if(p<fly.getCollisions())
   {
      var l = new Lines(X,Y,ylen);
      lineSet.push(l);
      X+=xlen;
      xlen = xlen/2;
      ylen++;
      p = fly.getCollisions();
   }
   
   for(var i = 0 ; i<lineSet.length ; i++)
   {
      lineSet[i].show(); 
   }
    
}