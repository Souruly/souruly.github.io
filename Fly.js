function Fly(x,y)
{
  this.position = createVector(x,y);
  this.velocity = createVector(5,0);
  this.collisions = 0;
  
  this.show = function()
  {
      fill(0);
      ellipse(this.position.x,this.position.y,2,2); 
  }
  
  this.update = function(x)
  {
     if(this.position.x>=width)
     {
        this.velocity = createVector(-5,0); 
     }
     
     if(this.position.x<x)
     {
        this.velocity = createVector(5,0);
        this.collisions += 0.5;
     }
   
     this.position.add(this.velocity);
  }
  
  this.getCollisions = function()
  {
    return floor(this.collisions);
  }
};