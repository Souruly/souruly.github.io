var cells = [];
var WIDTH,HEIGHT;
WIDTH  = HEIGHT = 500;
var numberOfCells = 100;
var slider;

function setup()
{
   createCanvas(WIDTH,HEIGHT);
   for(var i=0; i<numberOfCells ;i++)
   {
      var cell = new Cell();
      cell.start();
      cells.push(cell);
   }

   slider = createSlider(0,numberOfCells,50,5);
}

function draw()
{
   var colour = map(slider.value(),0,100,15,240);
   background(colour);
   fill(255-colour);
   for(var i=0 ; i<slider.value() ; i++)
   {
      cells[i].excite();
      cells[i].show();
   }
   for(var i=slider.value() ; i<100 ; i++)
   {
      cells[i].drop();
      cells[i].show();
   }
}
