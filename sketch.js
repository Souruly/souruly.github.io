let numberOfDivisions = 24;
let radius = 100;
let center;
let points = [];

let divisionSlider;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  ellipseMode(RADIUS);

  divisionSlider = createSlider(3,50,3,1);
  divisionSlider.class("slider");
  center = createVector(width/2, height/2);
  // console.log(points);
}

function draw()
{
  numberOfDivisions = divisionSlider.value();

  let radVector = createVector(0,-radius);
  let angleIncrement = TWO_PI/numberOfDivisions;
  for(let i=0 ; i<numberOfDivisions ; i++)
  {
    let p = createVector(radVector.x+center.x , radVector.y+center.y);
    points.push(p);
    radVector.rotate(angleIncrement);
  }

  background(250,250,230);
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(center.x, center.y, radius, radius);
  for (let i=0 ; i<points.length ; i++)
  {
    ellipse(points[i].x,points[i].y,radius,radius);
  }

  points = [];
}
