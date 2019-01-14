function Cell(i,j,index)
{
  this.i = i;
  this.j = j;
  this.index = index;
  this.revealed = false;
  this.maxRadiation = 20;
  this.radiation = 15;
  this.d = 0;
  this.set = false;

  this.show = function(p)
  {
    if(p)
    {
      stroke(255);
      strokeWeight(2);
    }
    else {
      noStroke();
    }
    if(this.revealed)
    {
      let r = map(this.radiation,0,this.maxRadiation,24,192);
      let g = map(this.radiation,0,this.maxRadiation,255,0);
      fill(r,g,0);
      rect(this.j*w+1,this.i*w+1,w-2,w-2);
      // textSize(w);
      // fill(0);
      // noStroke();
      // text(this.dist,this.j*w+w/2,this.i*w+w/2)
    }
    else
    {
      fill(51);
      rect(this.j*w+1,this.i*w+1,w-2,w-2);
    }
  }

}
