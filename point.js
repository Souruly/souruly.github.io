function Point(label,x,y,col)
{
  this.pos = createVector(x,y);
  this.label = label;
  this.col = col;

  this.show = function()
  {
    noStroke();
    fill(this.col);
    push();
    translate(this.pos.x, this.pos.y);
    textSize(15)
    text(this.label,-5,-7)
    ellipse(0, 0, 4, 4);
    pop();
  }

  this.update = function(newPosition)
  {
    this.pos = createVector(newPosition.x,newPositiony);
  }
}
