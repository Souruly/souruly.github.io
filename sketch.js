let numberOfDivisions = 24;
let radius = 100;
let center;
let points = [];

let divisionSlider;
let plusButton;
let minusButton;

function setup()
{
  createCanvas(1200,500);
  ellipseMode(RADIUS);

  divisionSlider = createSlider(3,50,3,1);
  divisionSlider.class("slider");
  divisionSlider.size(width,25);
  plusButton = createButton("+");
  plusButton.class("button");
  plusButton.id("pButton");
  plusButton.mousePressed(divisionsPlus);
  plusButton.position(width-50,height/2);
  minusButton = createButton("-");
  minusButton.class("button");
  minusButton.id("mButton");
  minusButton.mousePressed(divisionsMinus);
  minusButton.position(0,height/2);

  center = createVector(width/2, height/2);
  // console.log(points);
  getNumberOfDivisions();
}

function draw()
{
  divisionSlider.changed(getNumberOfDivisions);

  background(250,250,230);
  strokeWeight(2);
  noFill();
  let centralTransperency = map(numberOfDivisions,3,24,120,0);
  stroke(0,centralTransperency);
  ellipse(center.x, center.y, radius, radius);
  stroke(0);
  for (let i=0 ; i<points.length ; i++)
  {
    ellipse(points[i].x,points[i].y,radius,radius);
  }

}

function getNumberOfDivisions()
{
  points = [];

  numberOfDivisions = divisionSlider.value();

  let radVector = createVector(0,-radius);
  let angleIncrement = TWO_PI/numberOfDivisions;
  for(let i=0 ; i<numberOfDivisions ; i++)
  {
    let p = createVector(radVector.x+center.x , radVector.y+center.y);
    points.push(p);
    radVector.rotate(angleIncrement);
  }
}

function divisionsPlus()
{
  if(numberOfDivisions<50)
  {
    numberOfDivisions++;
    divisionSlider.value(numberOfDivisions);
    getNumberOfDivisions();
  }
}

function divisionsMinus()
{
  if(numberOfDivisions>3)
  {
    numberOfDivisions--;
    divisionSlider.value(numberOfDivisions);
    getNumberOfDivisions();
  }
}
