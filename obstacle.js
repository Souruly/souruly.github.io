function Obstacle(x,y)
{
  this.position = createVector(x,y);
  this.r = 10;

  this.show = function()
  {
    fill(232,0,0);
    ellipse(this.position.x,this.position.y,this.r,this.r);
  }
};
