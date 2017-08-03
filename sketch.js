var Birds1 = [];
var Birds2 = [];
var numberOfBirds = 40;
var WIDTH = 800;
var HEIGHT = 600;
function setup()
{
  createCanvas(WIDTH,HEIGHT);
  for(var i=0 ; i<numberOfBirds/2 ; i++)
  {
      var x = random(0,WIDTH);
      var y = random(0,HEIGHT);
      var b = new Bird(x,y,1);
      Birds1.push(b);
  }
  for(var i=0 ; i<numberOfBirds/2 ; i++)
  {
      var x = random(0,WIDTH);
      var y = random(0,HEIGHT);
      var b = new Bird(x,y,2);
      Birds2.push(b);
  }
  //console.log(Birds[1]);
}

function draw()
{
   background(255);
   for(var i=0;i<Birds1.length;i++)
   {
       Birds1[i].show();
       Birds2[i].show();
       Birds1[i].update(Birds1);
       Birds2[i].update(Birds2);
   }
}
