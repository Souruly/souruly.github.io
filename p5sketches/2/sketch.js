console.log("Loaded Sketch 2");

let numberOfBubbles = 100;

let bx, by;
let bubbles = [];
let minBubbleSize = 2,
  maxBubbleSize = 48;

let maxWindSpeed = 1;
let wind;
let windNoiseHandler = 0;

function resetSketch() {
  createCanvas(windowWidth, windowHeight);
  
  bx = 0;
  by = 3*height/4;

  bubbles = [];
  for (let i = 0; i < numberOfBubbles; i++) {
    let bs = round(random(minBubbleSize,maxBubbleSize));
    let b = new Bubble(bx, by, bs);
    bubbles.push(b);
  }
}

function setup() {
  ellipseMode(RADIUS);

  resetSketch();
}

function draw() {
  background(240);
  windNoiseHandler += 0.01;
  
 for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].update();
    // text(bubbles[i].size, width-50, (i+1)*50);
  }
}

function windowResized() {
  resetSketch();
}



class Bubble {
  constructor(x, y, size) {
    this.makeBubble(x, y, size);
  }

  makeBubble(x, y, size) {
    this.position = createVector(x, y);
    this.position.x -= random(2 * width, 0);

    this.size = size;

    this.windMul = this.size * 0.55;
    this.dragMul = map(this.size, 2, 30, 50, 30);
    this.lifetime = 100;
    this.velocityX = 10;
    this.velocityY = 0;
    this.maxVel = 8;
  }

  show() {
    fill(240,240);
    stroke(0);
    strokeWeight(2);
    ellipse(this.position.x, round(this.position.y), this.size);
    arc(this.position.x, this.position.y, this.size*0.9, this.size*0.9, -PI/2-0.1, -PI/4-0.1);
    arc(this.position.x, this.position.y, this.size*0.9, this.size*0.9, -PI/4+0.1, -PI/4+0.2);
  }

  update() {
    if (this.position.x + this.size > 0) {
      let wind = noise(windNoiseHandler) / 10;
      let windForce = wind * this.windMul;
      if (windForce > 0.06) {
        windForce = 0.06;
      }

      let dragForce = this.velocityX * (-1 / this.dragMul);
      if (this.position.x < width / 3) {
        let dMul = map(this.position.x, 10, width / 3, 0, 0.6);
        dragForce * dMul;
      } else {
        let dMul = map(this.position.x, width / 3, width, 0.3, 0.1);
        dragForce * dMul;
      }

      let force = windForce + dragForce;
      this.velocityX += force;

      if (this.velocityX > this.maxVel) {
        this.velocityX = this.maxVel;
      }

      this.velocityY = this.position.x*this.position.x*this.position.x/100;
      if(this.velocityY<1)
      {
        this.velocityY = 0;
      }

      if(this.velocityY > 3)
      {
        this.velocityY = 2;
      }

      // this.velocityY = 0;
    }

    let vel = createVector(this.velocityX, -this.velocityY);
    this.position.add(vel);

    let outOfBounds = false;

    if (this.position.x - this.size > width) {
      outOfBounds = true;
    }

    if (this.position.y + this.size < 0) {
      outOfBounds = true;
    }

    // if (this.position.y + this.size < 0) {
    //   outOfBounds = true;
    // }

    if (outOfBounds) {
      this.resetBubble();
    }
  }

  resetBubble() {
    let bs = round(random(minBubbleSize,maxBubbleSize));
    let x = 0;
    let y = (3 * height) / 4;

    this.makeBubble(x, y, bs);
  }
}
