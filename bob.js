function Bob(angle, length, col)
{
  this.theta = angle;
  this.r = length
  this.position;
  this.omega = 0;
  this.col = col;

  this.update = function()
  {
    let omegaPrime = (-gravity * sin(this.theta))/this.r;
    this.omega += omegaPrime;

    let thetaPrime = this.omega;
    this.theta += thetaPrime;

    let newPos = createVector(this.r,0);
    newPos.rotate(this.theta);
    // newPos.add(center);
    this.position = newPos;
  }

  this.show = function()
  {
    noStroke();
    fill(this.col);
    ellipse(this.position.x,this.position.y,15,15);
  }
}
