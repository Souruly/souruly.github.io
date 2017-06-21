var csize = 600;
var gridSize;
var w = 30;
var grid = [];
// var current;
var srow,scol;

function setup()
{
   createCanvas(csize,csize);
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

   srow = round(random(gridSize));
   scol = round(random(gridSize));
   console.log(srow,scol);
}

function draw()
{
   background(240);

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
         fillGrid(r,c+1,count+1);
         fillGrid(r,c-1,count+1);

         fillGrid(r+1,c+1,count+1);
         fillGrid(r+1,c,count+1);
         fillGrid(r+1,c-1,count+1);

         fillGrid(r-1,c+1,count+1);
         fillGrid(r-1,c,count+1);
         fillGrid(r-1,c-1,count+1);
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
