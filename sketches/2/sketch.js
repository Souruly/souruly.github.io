console.log("Loaded sketch 2");

let sketchDark = false;
let canvas;

let numberOfSegments = 3;

let segments = [];
let angles = [];
let buffer;
let px, py, tx, ty;

let timer = 1;

function resetSketch() {
  segments = [];
  px = 0, py = 0, tx = 0, ty = 0;

  canvas = createCanvas(windowWidth, windowHeight);

  // numberOfSegments = floor(random(1,4));
  numberOfSegments = 2;

  // angles = [2.4,6];
  getAngles();

  let l = max(windowWidth / 4 / numberOfSegments, 50);
  // let l = floor((windowWidth/2-20)/numberOfSegments);
  let seg0 = new Segment(windowWidth / 2, windowHeight / 2, l, 0, 0);
  segments.push(seg0);
  for (let i = 1; i < numberOfSegments; i++) {
    let parent = segments[i - 1];
    let seg = new Segment(parent.endPoint.x, parent.endPoint.y, l, 0, i);
    seg.getInitialEndPoint();
    segments.push(seg);
  }

  // for(let i=0 ; i<numberOfSegments ; i++)
  // {
  //   let a = round(random(-6,6));
  //   if(i==0)
  //   {
  //     let da;
  //     do{
  //       da = round(random(-5,5));
  //     }
  //     while(da==0);
  //     da = da/100;
  //     a += da;
  //   }
  //   angles.push(a);
  // }

  buffer = createGraphics(windowWidth, windowHeight);
  buffer.background(240);
  background(240);
}

function windowResized() {
  resetSketch();
  timer = frameCount;
}

function setup() {
  ellipseMode(RADIUS);
  textAlign(CENTER, TOP);
  rectMode(CORNERS);
  angleMode(DEGREES);
  imageMode(CORNER);
  colorMode(RGB);

  resetSketch();
  canvas.parent("canvasHolder");
}

function draw() {
  background(240);
  image(buffer, 0, 0);

  for (let i = 0; i < numberOfSegments; i++) {
    segments[i].show();
  }

  let l = segments.length;
  tx = segments[l - 1].endPoint.x;
  ty = segments[l - 1].endPoint.y;

  buffer.stroke(0);
  buffer.strokeWeight(2);
  if (frameCount > timer) {
    buffer.line(px, py, tx, ty);
  }

  for (let i = 0; i < numberOfSegments; i++) {
    segments[i].update(angles[i], segments);
  }
  px = tx;
  py = ty;
}

class Segment {
  constructor(x, y, segLength, initAngle, index) {
    this.startPoint = createVector(x, y);
    this.length = segLength;
    this.angle = initAngle;
    this.endPoint = createVector(0, 0);
    this.index = index;

    this.getInitialEndPoint();
  }

  getInitialEndPoint() {
    let x = this.startPoint.x + this.length * cos(this.angle);
    let y = this.startPoint.y + this.length * sin(this.angle);
    this.endPoint.set(x, y);
  }

  update(dtheta, segments) {
    if (this.index == 0) {
      this.angle += dtheta;
      let x = this.startPoint.x + this.length * cos(this.angle);
      let y = this.startPoint.y + this.length * sin(this.angle);
      this.endPoint.set(x, y);
    } else {
      this.startPoint = segments[this.index - 1].endPoint.copy();
      this.angle += dtheta;
      let x = this.startPoint.x + this.length * cos(this.angle);
      let y = this.startPoint.y + this.length * sin(this.angle);
      this.endPoint.set(x, y);
    }
  }

  show() {
    stroke(192);
    strokeWeight(2);
    line(
      this.startPoint.x,
      this.startPoint.y,
      this.endPoint.x,
      this.endPoint.y
    );
  }
}

function getAngles() {
  angles = [];
  let seedAngle = floor(random(2, 5));
  angles.push(seedAngle);

  commonMultiples = [2, 3, 5, 7, 11];

  for (let i = 1; i < numberOfSegments; i++) {
    let r1 = floor(random(8, 88));
    let n1 = seedAngle * r1;
    let a = n1 / 10;
    if (a > 20) {
      a = n1 / 100;
    }
    angles[i] = a;
  }
}
