function Obstacle(x,y)
{
  this.position = createVector(x,y);
  this.r = 10;

  this.show = function()
  {
    var c = map(repelSlider.value(),0,20,51,232);
    fill(c,51,51);
    ellipse(this.position.x,this.position.y,this.r,this.r);
  }
};
