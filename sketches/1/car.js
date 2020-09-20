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
    let r = (y1-y)*15;
    push()
    translate(this.x, y);
    rotate(r);
    if(this.lights)
    {
      for (let i = 0; i < this.headLightDisp; i++) {
          let x = map(i,0, this.headLightDisp, 10, 80);
          let y = map(i,0, this.headLightDisp, 7, 42);
          let f = map(i,0, this.headLightDisp, 51, 0);
          fill(255,255,0,f);
          triangle(0, 0, x, -y, x, y);
      }
    }
    image(this.dispImage, 0,0);
    pop();
  }

  update() {
    this.lights = sketchDark;
  }
}
