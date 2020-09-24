console.log("Sketch loaded");

let sketchDark = false;
let car, road;
let carImg;
let carImageLoaded = false;

function preload()
{
  let carImg = loadImage('car.png');
  carImageLoaded = true;
  car = new Car(0, 0, sketchDark);
  // car.setImage(carImg);
}

function setup() {
  angleMode(DEGREES);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasHolder");
  rectMode(CENTER);
  imageMode(CENTER);
  carX = width / 6;
  carY = (5 * height) / 6;
  car.reset(carX, carY, sketchDark)
  road = new Road(carY);
  road.build();
  car.reposition(road.roadBuildJump);
}

function draw() {
  if(sketchDark)
  {
    background(0);
  }
  else{
    background(255);
  }
  road.show();
  car.show(road);
  // car.update();
  road.update();
}

function windowResized() {
  canvas = createCanvas(windowWidth, windowHeight);
  carX = width / 6;
  carY = (5 * height) / 6;
  car.x = carX;
  car.y = carY;
  road = new Road(carY);
  road.build();
  car.reposition(road.roadBuildJump);
}

// =================================================================
// Classes

class Car {
  constructor(x, y, darkVal) {
    this.x = x;
    this.y = y;
    this.lights = darkVal;
    this.imgSet = false;
    this.dispImage;
    this.roadIndex;
    this.headLightDisp = 50;
  }

  setImage(carImg)
  {
    this.dispImage = carImg;
    this.imgSet = true;
  }

  reset(x, y, dark) {
    this.x = x;
    this.y = y;
    this.lights = dark;
  }

  reposition(ix) {
    this.roadIndex = floor(this.x/ix);
  }

  show(rd) {
    noStroke();
    let y = rd.roadY[this.roadIndex];
    let y1 = rd.roadY[this.roadIndex+2];
    let r = (y1-y)*20;
    push()
    translate(this.x, y);
    rotate(r);
    for (let i = 0; i < this.headLightDisp; i++) {
        let x = map(i,0, this.headLightDisp, 10, 80);
        let y = map(i,0, this.headLightDisp, 7, 42);
        let f = map(i,0, this.headLightDisp, 51, 0);
        fill(255,255,0,f);
        triangle(0, 0, x, -y, x, y);
    }
    image(this.dispImage, 0,0);
    pop();
  }

  update() {}
}

class Road {
  constructor(yVal) {
    this.positionY = yVal;
    this.initVal = yVal;
    this.vel = 0;

    this.maxVel = 1;
    this.pullForceMultiplier = 0.01;

    this.roadBuildJump = 3;
    this.roadRandomness = 1;
    this.roadBuilder;
    this.roadBuilderVel = 0;
    this.roadWidthBy2 = 50;
    this.stripeLength = 10;

    this.roadX = [];
    this.roadY = [];
    this.roadLength;
    this.stripes = [];
    this.numberOfStripes;
  }

  build() {
    let equill = this.initVal;
    for (let x = 0; x < width; x += this.roadBuildJump) {
      let y = random(
        this.positionY - this.roadRandomness,
        this.positionY + this.roadRandomness
      );
      if (y < equill - 100 || y > height - 20) {
        y = equill;
      }
      let pullForce = y - this.positionY;
      this.vel = this.vel + sign(pullForce) * this.pullForceMultiplier;
      this.vel = limitVal(this.vel, this.maxVel);
      this.positionY += this.vel;

      this.roadX.push(x);
      this.roadY.push(this.positionY);
    }
    this.roadLength = this.roadX.length;
    this.numberOfStripes = this.roadLength/(2*this.stripeLength);
    
    for (let i = 0; i < this.numberOfStripes; i++) {
      this.stripes.push(i*this.stripeLength*2);
    }
    console.log(this.stripes);
    
  }

  show() {
    if (dark) {
      stroke(255);
    } else {
      stroke(0);
    }
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < this.roadLength; i++) {
      vertex(this.roadX[i], this.roadY[i] - this.roadWidthBy2);
    }
    endShape();

    beginShape();
    for (let i = 0; i < this.roadLength; i++) {
      vertex(this.roadX[i], this.roadY[i] + this.roadWidthBy2);
    }
    endShape();

    for (let i = 0; i < this.stripes.length; i++) {
      let index = this.stripes[i];
      if(index<this.roadLength)
      {
        ellipse(this.roadX[index], this.roadY[index],2,2);
      }
    }
  }

  update() {
    let prevRoadBlock = this.roadY.splice(0, 1);
    // lastVal = roadY[roadY.length - 1];
    let equill = this.initVal;
    let y = random(
      this.positionY - this.roadRandomness,
      this.positionY + this.roadRandomness
    );
    if (y < height / 2 || y > height - 20) {
      y = equill;
    }
    let pullForce = y - this.positionY;
    this.vel = this.vel + sign(pullForce) * this.pullForceMultiplier;
    this.vel = limitVal(this.vel, this.maxVel);
    this.positionY += this.vel;
    this.roadY.push(this.positionY);

    for (let i = 0; i < this.stripes.length; i++) {
      let xPos = this.stripes[i];
      xPos--;
      if(xPos<0)
      {
        xPos = this.roadLength+this.stripeLength*2;
      }
      this.stripes[i] = xPos;
      
    }
  }
}

function limitVal(val, limit) {
  if (val < -limit) {
    return -limit;
  } else {
    if (val >= limit) {
      return limit;
    }
  }
  return val;
}

function sign(val) {
  if (val > 0) {
    return 1;
  } else {
    if (val < 0) {
      return -1;
    }
  }
  return 0;
}

