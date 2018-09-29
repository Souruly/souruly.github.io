class Dice
{
  constructor(x,y,animation)
  {
    this.x = x;
    this.y = y;
    this.animation = animation;
  }

  show(val)
  {
    val = val-1;
    if(val>5 || val<0)
    {
      val = 5;
    }
    image(this.animation[val], this.x-48, this.y-48, 96, 96);
  }
}
