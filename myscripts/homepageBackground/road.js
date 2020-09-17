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

    this.roadX = [];
    this.roadY = [];
    this.roadLength;
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
