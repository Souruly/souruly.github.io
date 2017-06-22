var csize = 600;
var gridSize;
var w = 20;
var grid = [];
// var current;
var r,g,b;
var sliderR,sliderG,sliderB;
var srow,scol;

function setup()
{
   createCanvas(800,csize);
   // frameRate(0.25);
   gridSize = csize / w;
   gridSize = gridSize - 2;
   console.log(gridSize);
   for(var i = 1 ; i <= gridSize ; i++)
   {
      for(var j = 1 ; j<= gridSize ; j++)
      {
         var cell = new Cell(i,j);
         grid.push(cell);
      }
   }

   srow = round(random(0,gridSize-1));
   scol = round(random(0,gridSize-1));
   sliderR = createSlider(0,255,255,1);
   sliderR.position(650,50);
   sliderG = createSlider(0,255,85,1);
   sliderG.position(650,100);
   sliderB = createSlider(0,255,0,1);
   sliderB.position(650,150);
   console.log(srow,scol);
}

function draw()
{
   background(240);
   fill(0);
   r = sliderR.value();
   textSize(20);
   text("R",700,40);
   g = sliderG.value();
   text("G",700,90);
   b = sliderB.value();
   text("B",700,140);
   text( "Click anywhere on the grid to change the light source.",650,230,100,500);
   noFill();
   fillGrid(srow,scol,0);
   for(var i = 0 ; i < grid.length ; i++)
   {
      grid[i].show();
   }

}

function fillGrid(r,c,count)
{
   if(outOfBounds(r,c))
   {
      return;
   }
   else
   {
      var current = grid[index(r,c)];
      if(count>=current.weight)
      {
         return;
      }
      else
      {
         current.weight = count;
         var i=1;
         if(count%2==0)
         {
            i=2;
         }
         fillGrid(r,c+1,count+1);
         fillGrid(r,c-1,count+1);

         fillGrid(r+1,c+1,count+i);
         fillGrid(r+1,c,count+1);
         fillGrid(r+1,c-1,count+i);

         fillGrid(r-1,c+1,count+i);
         fillGrid(r-1,c,count+1);
         fillGrid(r-1,c-1,count+i);
      }
   }
}

function outOfBounds(r,c)
{
   var status;
   if(r<0 || c<0 || r>=gridSize || c>=gridSize)
   {
      status = true;
   }
   else
   {
      status = false;
   }
   return status;
}

function index(r,c)
{
   if(r<0 || c<0 || r>=gridSize || c>=gridSize)
   {
      return -1;
   }
   else
   {
      return r+c*gridSize;
   }
}

function mousePressed()
{
   var x = pmouseX;
   var y = pmouseY;
   // console.log(x,y);
   if(x<w || y<w || x>(csize-w) || y>(csize-w))
   {
      console.log("Source out of bounds");
   }
   else
   {
      x = floor(map(x,w,(csize-w),0,gridSize));
      y = floor(map(y,w,(csize-w),0,gridSize));
      srow = y;
      scol = x;
      resetGrid();
      console.log(x,y);
   }
}

function resetGrid()
{
   for(var i = 0 ; i < grid.length ; i++)
   {
      grid[i].weight = gridSize+1;
   }
}
