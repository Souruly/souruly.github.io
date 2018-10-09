let data = [];
let grid = [];
let count = 15;
let gotData = false;
let w = 30;
let csize = 600;
let done = 0;
let gridSize;
let wordsFilled = false;
let button1;
let button2;
let saveFrameButton;
let frameCount = 0;

function getWords(words)
{
   let x = words.words.length
   let i=0;
   while(i<count)
   {
      let y = floor(random(x));
      let z = words.words[y];
      z = z.toUpperCase();
      if(z.length<=10)
      {
         let inpw = new Word(z);
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
   textAlign(LEFT);

   //Extracting data
   loadJSON("words.json",getWords);

   //Setting limits to the number of words
   if(count>15)
   {
     count = 15;
   }

   //Setting the grid parameters
   gridSize = csize / w;
   gridSize = gridSize - 2;

   // Cells for the puzzle grid
   for(let i = 1 ; i <= gridSize ; i++)
   {
      for(let j = 1 ; j<= gridSize ; j++)
      {
         let cell = new Cell(i,j);
         grid.push(cell);
      }
   }

   //Cells for displaying grid indices
   for(let i = 1 ; i <= gridSize ; i++)
   {
     let cell = new Cell(i,0);
     cell.weight = i;
     cell.isWord = false;
     cell.alreadySet=true;
     cell.isIndex = true;
     grid.push(cell);
   }
   for(let i = 1 ; i <= gridSize ; i++)
   {
     let cell = new Cell(0,i);
     cell.weight = i;
     cell.isWord = false;
     cell.alreadySet=true;
     cell.isIndex = true;
     grid.push(cell);
   }

   //Creating Buttons
   button1 = createButton('Solution');
   button1.position(600,550);
   button1.mousePressed(solveGame);
   button2 = createButton('Hide Solution');
   button2.position(670,550);
   button2.mousePressed(hideSolution);
   saveFrameButton = createButton("Download");
   saveFrameButton.position(630,575);
   saveFrameButton.mousePressed(saveCurrentFrame)
}

function draw()
{
   frameCount++;
   background(255);
   noStroke(0);
   // resetGrid();
   if(gotData==true)
   {
      for(let i=0 ; i<data.length ; i++)
      {
         if(data[i].set==false)
         {
            let x = fillWordIntoGrid(data[i].word, floor(random(gridSize)) , floor(random(gridSize)) , floor(random(0,2)) , floor(random(0,2)), i);
            if(x==1)
            {
               data[i].set=true;
               done++;
            }
         }
      }

      //Displaying the words list in the right margin
      for(let i=0 ; i<data.length ; i++)
      {
         let off = round(map(data.length,0,15,90,30));
         textSize(20);
         textAlign(LEFT);
         fill(0);
         noStroke();
         text((i+1)+". "+data[i].word,630,60+i*off);
      }
      if(done==count)
      {
         fillGrid();
         for(let i=0 ; i<grid.length ; i++)
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
      else
      {
         textSize(50);
         text("Generating...",150,200);
         textSize(20);
         let refreshMessage = "Please consider refreshing the page if the counter goes above 10  --------->";
         text(refreshMessage,150,250,250,350);
         textSize(50);
         text(round(frameCount/30),400,325);
      }

      stroke(0);
      strokeWeight(5);
      noFill();
      rect(w,w,(gridSize*w),(gridSize*w));
   }
}

function outOfBounds(r,c)
{
   let status;
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
      console.log(r+1,c+1,xDir,yDir);
      for(let i=0 ; i<word.length ; i++)
      {
         let rr = r+yDir*i;
         let cc = c+xDir*i
         let ll = index(rr,cc);
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
   let l = word.length;
   // if(xDir==yDir)
   // {
   //    return true;
   // }

   if(xDir==0 && yDir==0)
   {
      return true;
   }

   if(outOfBounds(r+yDir*l,c+xDir*l))
   {
      return true;
   }

   for(let i=0 ; i<l ; i++)
   {
      if(grid[index(r+yDir*i,c+xDir*i)].alreadySet==true)
      {
         if(grid[index(r+yDir*i,c+xDir*i)].weight != word[i])
         {
            return true;
         }
      }
   }
   return false;
}

function getRandomCharacter()
{
   let x = round(random(65,90));
   let y = String.fromCharCode(x);
   return y;
}

function resetGrid()
{
   for(let i = 0 ; i < grid.length ; i++)
   {
      grid[i].weight = ' ';
   }
}

function fillGrid()
{
   for(let i=0 ; i<grid.length ; i++)
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
      for(let i=0 ; i<data.length ; i++)
      {
         let r = random(180);
         let g = random(180);
         let b = random(180);
         for(let j=0 ; j<data[i].locations.length ; j++)
         {
            let l = data[i].locations[j];
            grid[l].setBackgroundColor(r+10*j,g+10*j,b+10*j);
         }
      }
   }
}

function hideSolution()
{
   if(wordsFilled==true)
   {
      for(let i=0 ; i<data.length ; i++)
      {
         for(let j=0 ; j<data[i].locations.length ; j++)
         {
            let l = data[i].locations[j];
            grid[l].setBackgroundColor(255,255,255);
         }
      }
   }
}

function saveCurrentFrame()
{
  let fname = "Word Puzzle";
  saveCanvas(fname, 'png');
}
