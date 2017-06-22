function Cell(x,y)
{
   this.x = x;
   this.y = y;
   this.weight = gridSize+1;

   this.setWeight = function(x)
   {
      /*
      var angle = map(count,0,30,0,HALF_PI);
      weight = cos(angle);
      */
      this.weight = x;
   }

   this.show = function()
   {
      var x = gridSize-this.weight;
      var rr = map(x,0,gridSize-1,-10,r);
      var gg = map(x,0,gridSize-1,-10,g);
      var bb = map(x,0,gridSize-1,-10,b);
      // this.fillcolor = map(x,0,gridSize-1,0,255);
      stroke(0);
      strokeWeight(0.01);
      fill(rr,gg,bb);
      rect(this.x*w,this.y*w,w,w);
      // textSize(9*w/10);
      // textAlign(CENTER);
      // fill(0);
      // text(this.weight , w/2+this.x*w , w+this.y*w-w/6);
   }
}
