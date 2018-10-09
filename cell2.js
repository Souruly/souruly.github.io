function Cell(x,y)
{
   this.x = x;
   this.y = y;
   this.weight = ' ';
   this.alreadySet = false;
   this.backgroundColor = color(255,255,255);
   this.isIndex = false;
   // this.isWord = true;

   this.setBackgroundColor = function(r,g,b)
   {
      var x = color(r,g,b);
      this.backgroundColor = x;
   }

   this.show = function()
   {
      this.fillcolor = 255;
      noStroke();
      fill(this.backgroundColor);
      textSize(8*w/10);
      if(this.isIndex==true)
      {
        textSize(6*w/10);
      }
      rect(this.x*w,this.y*w,w,w);
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.weight , w/2+this.x*w , w+this.y*w-w/6);
   }
}
