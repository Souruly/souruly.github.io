var data = [];
var grid = [];
var count = 8;
var gotData = false;
var w = 30;
var csize = 600;
var done = 0;
var gridSize;
var wordsFilled = false;
var button1;
var button2;

function getWords(words)
{
   var x = words.words.length
   var i=0;
   while(i<count)
   {
      var y = floor(random(x));
      var z = words.words[y];
      z = z.toUpperCase();
      if(z.length<=10)
      {
         var inpw = new Word(z);
         data.push(inpw);
         i++;
      }
   }
   console.log(data);
   gotData = true;
}

function setup()
{
   createCanvas(800,csize);
   frameRate(30);
   loadJSON("words.json",getWords);
   gridSize = csize / w;
   gridSize = gridSize - 2;
   for(var i = 1 ; i <= gridSize ; i++)
   {
      for(var j = 1 ; j<= gridSize ; j++)
      {
         var cell = new Cell(i,j);
         grid.push(cell);
      }
   }

   button1 = createButton('Solution');
   button1.position(600,550);
   console.log("Button1 Created");
   button1.mousePressed(solveGame);
   button2 = createButton('Hide Solution');
   button2.position(670,550);
   console.log("Button2 Created");
   button2.mousePressed(hideSolution);
}

function draw()
{
   background(192);
   // resetGrid();
   if(gotData==true)
   {
      for(var i=0 ; i<data.length ; i++)
      {
         if(data[i].set==false)
         {
            var x = fillWordIntoGrid(data[i].word, floor(random(gridSize)) , floor(random(gridSize)) , floor(random(-1,2)) , floor(random(-1,2)), i);
            if(x==1)
            {
               data[i].set=true;
               done++;
            }
         }
      }
      background(240);
      // textSize(20);
      for(var i=0 ; i<data.length ; i++)
      {
         textSize(20);
         text(data[i].word,650,90+i*60);
         // fillWordIntoGrid(data[i],0,i,0,1);
      }
      // fillGrid();

      // for(var i=0 ; i<grid.length ; i++)
      // {
      //    grid[i].show();
      // }
      // if(wordsFilled==true)
      // {
      //     noLoop();
      // }
      if(done==count)
      {
         fillGrid();
         for(var i=0 ; i<grid.length ; i++)
         {
            grid[i].show();
         }
         if(wordsFilled==false)
         {
            console.log(data);
            console.log("STOP");
            wordsFilled = true;
         }
      }
      // else
      // {
      //    done = 0;
      // }
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

function fillWordIntoGrid(word,r,c,xDir,yDir,ii)
{
   if(wordSetFailure(word,r,c,xDir,yDir))
   {
      return 0;
   }
   else
   {
      console.log(r,c,xDir,yDir);
      for(var i=0 ; i<word.length ; i++)
      {
         var rr = r+yDir*i;
         var cc = c+xDir*i
         var ll = index(rr,cc);
         grid[ll].weight = word[i];
         data[ii].locations.push(ll);
         grid[ll].alreadySet = true;
         grid[ll].isWord = true;
      }
      return 1;
   }
}

function wordSetFailure(word,r,c,xDir,yDir)
{
   var l = word.length;
   if(xDir==yDir)
   {
      return true;
   }

   if(outOfBounds(r+yDir*l,c+xDir*l))
   {
      return true;
   }

   for(var i=0 ; i<l ; i++)
   {
      if(grid[index(r+yDir*i,c+xDir*i)].alreadySet==true)
      {
         return true;
      }
   }
   return false;
}

function getRandomCharacter()
{
   var x = round(random(65,90));
   var y = String.fromCharCode(x);
   return y;
}

function resetGrid()
{
   for(var i = 0 ; i < grid.length ; i++)
   {
      grid[i].weight = ' ';
   }
}

function fillGrid()
{
   for(var i=0 ; i<grid.length ; i++)
   {
      if(grid[i].alreadySet==false)
      {
         grid[i].weight = getRandomCharacter();
         grid[i].isWord = false;
         grid[i].alreadySet=true;
      }
   }
}

function solveGame()
{
   if(wordsFilled==true)
   {
      for(var i=0 ; i<data.length ; i++)
      {
         var r = random(255);
         var g = random(255);
         var b = random(255);
         for(var j=0 ; j<data[i].locations.length ; j++)
         {
            var l = data[i].locations[j];
            grid[l].setBackgroundColor(r,g,b);
         }
      }
   }
}

function hideSolution()
{
   if(wordsFilled==true)
   {
      for(var i=0 ; i<data.length ; i++)
      {
         for(var j=0 ; j<data[i].locations.length ; j++)
         {
            var l = data[i].locations[j];
            grid[l].setBackgroundColor(255);
         }
      }
   }
}
