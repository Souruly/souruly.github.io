function Lines(x,y,l)
{
   this.position = createVector(x,y);
   this.len = l;
   
   this.show = function()
   {
      stroke(0);
      strokeWeight(4);
      line(this.position.x,this.position.y,this.position.x,this.position.y-this.len); 
   }
};