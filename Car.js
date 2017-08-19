function Car(x,y)
{
  this.position = createVector(x,y);
  this.velocity = createVector(2,0);
  
  this.show = function()
  {
     fill(192,0,0);
     var x = this.position.x;
     var y = this.position.y;
     rect(x,y,x-160,y+30);
     rect(x-40,y,x-120,y-30);
     triangle(x-20,y,x-40,y,x-40,y-30);
     triangle(x-140,y,x-120,y,x-120,y-30);
     fill(0);
     ellipse(x-30,y+40,10,10);
     ellipse(x-130,y+40,10,10);
     noFill();
  }
  
  this.update = function()
  {
     if(this.position.x>=width)
     {
        this.velocity.mult(0); 
     }
     this.position.add(this.velocity);
  }
};