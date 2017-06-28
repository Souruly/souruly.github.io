function Cell(x,y)
{
   this.x = x;
   this.y = y;
   this.weight = ' ';
   this.alreadySet = false;
   this.backgroundColor = 255;
   // this.isWord = true;

   this.setBackgroundColor = function(x)
   {
      this.backgroundColor = x;
   }

   this.show = function()
   {
      this.fillcolor = 255;
      stroke(0);
      strokeWeight(0.1);
      fill(this.backgroundColor);
      rect(this.x*w,this.y*w,w,w);
      textSize(8*w/10);
      textAlign(CENTER);
      fill(0);
      text(this.weight , w/2+this.x*w , w+this.y*w-w/6);
   }
}
