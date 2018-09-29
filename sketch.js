let fixedPoints = [];
let nPoints = 3;
let nSides = 6
let ca,cb,cc;
let tCols = [];
let thisCol;
let tracePoint;
let buffer;
let operationMode = 0;
let dieValue = -1;
let omode = "TBD";
let thisPoint;

let dice;
let animation = [];
let diceSpriteSheet;
let triButton1,triButton2;
let autoButton,manButton;

function preload()
{
  diceSpriteSheet = loadImage('Assets/diceRed.png');
}

function setup()
{
  createCanvas(1200,600);
  ellipseMode(RADIUS);
  rectMode(CENTER)
  textAlign(CENTER,CENTER);
  buffer = createGraphics(800, 600);
  buffer.ellipseMode(RADIUS);
  ca = color(255,0,0);
  cb = color(0,255,0);
  cc = color(0,0,255);
  tCols.push(ca);
  tCols.push(cb);
  tCols.push(cc);
  getDice();

  makeButtons();

  getNiceTriangle();

  tracePoint = createVector(random(50,800-50),random(50,height-50));
  thisPoint = tracePoint;
  buffer.background(240);
  buffer.fill(0);
  buffer.noStroke();
  buffer.ellipse(tracePoint.x,tracePoint.y,1,1);
}

function makeButtons()
{
  triButton1 = createButton("Reset");
  triButton1.position(850,220);
  triButton1.mousePressed(getNiceTriangle);
  triButton2 = createButton("Randomize");
  triButton2.position(1100,220);
  triButton2.mousePressed(getRandomTriangle);
  autoButton = createButton("Auto");
  autoButton.position(910,290);
  autoButton.mousePressed(changeModeToAuto);
  manButton = createButton("Manual");
  manButton.position(1050,290);
  manButton.mousePressed(changeModeToManual);
}

function getDice()
{
  animation = [];
  let face = diceSpriteSheet.get(64,0,64,64);
  animation.push(face);
  face = diceSpriteSheet.get(128,0,64,64);
  animation.push(face);
  face = diceSpriteSheet.get(64,64,64,64);
  animation.push(face);
  face = diceSpriteSheet.get(128,64,64,64);
  animation.push(face);
  face = diceSpriteSheet.get(0,64,64,64);
  animation.push(face);
  face = diceSpriteSheet.get(0,0,64,64);
  animation.push(face);

  dice = new Dice(1000,90,animation);
}

function draw()
{
  background(240);
  image(buffer, 0, 0, 800, 600);
  drawBorders();
  dice.show(dieValue);
  for(let i=0 ; i<fixedPoints.length ; i++)
  {
    fixedPoints[i].show();
  }

  if(operationMode>1)
  {
    getNewPoint(floor(random(1,7)));
  }
  else
  {
    noFill();
    stroke(0)
    ellipse(thisPoint.x,thisPoint.y,10,10);
  }
}

function mousePressed()
{
  if(operationMode==1 && pmouseX<1050 && pmouseX>950 && pmouseY<150 && pmouseY>50)
  {
    dieValue = floor(random(0,nSides));
    getNewPoint(dieValue);
  }
}

function getNewPoint(val)
{
  dieValue = val
  let targetIndex = floor(map(val,0,nSides-1,0,nPoints-1));
  thisCol = tCols[targetIndex];
  let targetPoint = fixedPoints[targetIndex];
  let directionVector = p5.Vector.sub(targetPoint.pos,tracePoint);
  directionVector.mult(0.5);
  tracePoint.add(directionVector)
  buffer.fill(thisCol);
  buffer.ellipse(tracePoint.x,tracePoint.y,1,1);

  if(operationMode == 2)
  {
    val = floor(random(0,nSides));
    targetIndex = floor(map(val,0,nSides-1,0,nPoints-1));
    targetPoint = fixedPoints[targetIndex];
    directionVector = p5.Vector.sub(targetPoint.pos,tracePoint);
    directionVector.mult(0.5);
    tracePoint.add(directionVector)
    buffer.ellipse(tracePoint.x,tracePoint.y,1,1);

    val = floor(random(0,nSides));
    targetIndex = floor(map(val,0,nSides-1,0,nPoints-1));
    targetPoint = fixedPoints[targetIndex];
    directionVector = p5.Vector.sub(targetPoint.pos,tracePoint);
    directionVector.mult(0.5);
    tracePoint.add(directionVector)
    buffer.ellipse(tracePoint.x,tracePoint.y,1,1);
  }
}

function getNiceTriangle()
{
  fixedPoints = [];
  let a,b,c
  ca = color(255,0,0);
  cb = color(0,255,0);
  cc = color(0,0,255);
  a = new Point("A",420,50,ca);
  b = new Point("B",102,504,cb);
  c = new Point("C",640,390,cc);
  fixedPoints.push(a);
  fixedPoints.push(b);
  fixedPoints.push(c);

  tracePoint = createVector(random(50,800-50),random(50,height-50));
  buffer.background(240);
  thisPoint = tracePoint;
  buffer.ellipse(tracePoint.x,tracePoint.y,1,1);

  operationMode = 0;
  autoButton.show();
  manButton.show();
}

function getRandomTriangle()
{
  fixedPoints = [];
  let a,b,c
  ca = color(255,0,0);
  cb = color(0,255,0);
  cc = color(0,0,255);
  a = new Point("A",random(50,750),random(50,550),ca);
  b = new Point("B",random(50,750),random(50,550),cb);
  c = new Point("C",random(50,750),random(50,550),cc);
  fixedPoints.push(a);
  fixedPoints.push(b);
  fixedPoints.push(c);

  tracePoint = createVector(random(50,800-50),random(50,height-50));
  buffer.background(240);
  thisPoint = tracePoint;
  buffer.ellipse(tracePoint.x,tracePoint.y,1,1);

  operationMode = 0;
  autoButton.show();
  manButton.show();
}

function changeModeToAuto()
{
  operationMode = 2;
  omode = "AUTO";
  autoButton.hide();
  manButton.show();
}

function changeModeToManual()
{
  operationMode = 1;
  omode = "MANUAL";
  manButton.hide();
  autoButton.show();
}

function drawBorders()
{
  buffer.stroke(0);
  buffer.strokeWeight(2);
  buffer.line(1,1,799,1);
  buffer.line(799,1,799,599);
  buffer.line(799,599,1,599);
  buffer.line(1,599,1,1);
  buffer.noStroke();

  stroke(0);
  strokeWeight(2);
  line(799,180,1200,180);
  line(1199,1,1199,599);
  line(1199,599,799,599);
  line(799,1,1200,1);
  line(799,250,1200,250);
  if(operationMode==1)
  {
    line(799,350,1200,350);
  }
  else
  {
    line(799,350,1200,350);
  }
  noFill();
  rect(1000,90,80,80);
  ellipse(1000,90,20,20);
  noStroke();
  fill(0)
  textSize(32);
  textSize(16);
  textStyle(BOLD);
  text("FIXED POINTS",1000,200);
  text("OPERATING MODE : " + omode,1000,270);
  textStyle(NORMAL);
  if(operationMode==1)
  {
    text(dieValue,1000,90);
    text("ROLL THE DIE BY CLICKING ON IT.",1000,330);
  }

}
