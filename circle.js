function Circle(x,y,r,type)
{
  this.x = x;
  this.y = y;
  this.r = r;
  this.input = type;

  this.show = function()
  {
    stroke(0);
    strokeWeight(5);
    if(this.input)
    {
      fill(200,0,0);
    }
    else
    {
      fill(0,50);
    }
    //console.log("Show");
    ellipse(this.x,this.y,this.r);
  }

  this.update = function(r)
  {
    this.r = r;
  }
}
