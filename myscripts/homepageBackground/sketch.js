let canvas;

let dark = true;
let myCar, road;
let carImg;

function preload()
{
  let carImg = loadImage('myCar.png')
  myCar = new myCar(0, 0, dark);
  myCar.setImage(carImg);
}

function setup() {
  angleMode(DEGREES);
  canvas = createCanvas(windowWidth, windowHeight);
   // canvas.position(0,0);
  // canvas.style('z-index', '-1')
  rectMode(CENTER);
  imageMode(CENTER);
  carX = width / 6;
  carY = (5 * height) / 6;
  myCar.reset(carX, carY, dark)
  road = new Road(carY);
  road.build();
  myCar.reposition(road.roadBuildJump);
  console.log("Sketch loaded");
}

function draw() {
  if(dark)
  {
    background(0);
  }
  else{
    background(255);
  }
  road.show();
  myCar.show(road);
  // myCar.update();
  road.update();
}

function windowResized() {
  canvas = createCanvas(windowWidth, windowHeight);
  carX = width / 6;
  carY = (5 * height) / 6;
  myCar.x = carX;
  myCar.y = carY;
  road = new Road(carY);
  road.build();
  myCar.reposition(road.roadBuildJump);
}
