function Worker(i,j)
{
  this.i = i;
  this.j = j;

  this.move = function()
  {
    let mI = floor(random(-1,2));
    let mJ = floor(random(-1,2));
    this.i += mI;
    this.j += mJ;
    if(this.i<0)
    {
      this.i=0;
    }
    if(this.j<0)
    {
      this.j=0;
    }
    if(this.i>rows-1)
    {
      this.i = rows-1;
    }
    if(this.j>cols-1)
    {
      this.j = cols-1;
    }


  }
}
