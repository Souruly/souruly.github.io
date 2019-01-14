let w=20;
let rows,cols;
let grid = [];
let worker;
let toggleMapButton;
let moveWorkerButton;
let predictSourceButton;

let predictions = [];

function setup()
{
   createCanvas(1200,600);
   textAlign(CENTER,CENTER);

   rows = 600/w;
   cols = 600/w;

   let sourceX = round(random(0,rows-1));
   let sourceY = round(random(0,cols-1));
   console.log("Source : ",sourceX,sourceY);
   // let sourceX = 1;
   // let sourceY = 1;
   let workerX = round(random(0,rows-1));
   let workerY = round(random(0,cols-1));
   worker = new Worker(workerX,workerY);

   let count = 0;
   for(let i=0 ; i<rows ; i++)
   {
     for(let j=0 ; j<cols ; j++)
     {
       let c = new Cell(i,j,count);
       grid.push(c);
       count++;
     }
   }

   generateMap(sourceX,sourceY);

   toggleMapButton = createButton('Toggle Map');
   toggleMapButton.mousePressed(toggleMap);
   toggleMapButton.position(850,260);
   moveWorkerButton = createButton('Move Worker');
   moveWorkerButton.mousePressed(moveWorker);
   moveWorkerButton.position(850,300);
   predictSourceButton = createButton('Predict Source');
   predictSourceButton.mousePressed(predictSource);
   predictSourceButton.position(850,340);

   grid[getIndex(workerX,workerY)].revealed = true;
}

function drawStructure()
{
  fill(51);
  rect(0,0,600,600);
  stroke(0);
  strokeWeight(2);
  line(1,1,1199,1);
  line(599,1,599,599);
  line(1199,599,1,599);
  line(1,599,1,1);
  line(1199,1,1199,599);
  line(600,100,1200,100);

  stroke(192);
  strokeWeight(0.2);
  for(let x=0 ; x<cols ; x++)
  {
    line(x*w,0,x*w,600);
  }

  for(let y=0 ; y<rows ; y++)
  {
    line(0,y*w,600,y*w);
  }

  noStroke();
  textSize(48);
  text("Radiation Map",900,50);
  noFill();
}

function draw()
{
   background(240);
   drawStructure();

   for(let i=0 ; i<grid.length ; i++)
   {
     grid[i].show(false);
   }

   for(let i=0 ; i<predictions.length ; i++)
   {
     predictions[i].show(true);
   }
}

function generateMap(sX,sY)
{
  let root = createVector(sX,sY);
  for(let i=0 ; i<rows ; i++)
  {
    for(let j=0 ; j<cols ; j++)
    {
      let c = createVector(i,j);
      let d = round(root.dist(c));
      grid[getIndex(i,j)].dist = d;
      let rad = round(map(d,0,41,20,0));
      grid[getIndex(i,j)].radiation = rad;
      grid[getIndex(i,j)].set = true;
    }
  }
}

function moveWorker()
{
  console.log(worker.i,worker.j);
  worker.move();
  console.log(worker.i,worker.j);
  let i = worker.i;
  let j = worker.j;
  grid[getIndex(i,j)].revealed = true;
}

function predictSource()
{
  let revealedCellVecs = [];
  let revealedCells = [];
  for(let i=0 ; i<grid.length ; i++)
  {
    if(grid[i].revealed)
    {
      let v = createVector(grid[i].i,grid[i].j);
      revealedCellVecs.push(v);
      revealedCells.push(grid[i]);
    }
  }

  predictions = [];
  for(let i=0 ; i<grid.length ; i++)
  {
    let thisCellVec = createVector(grid[i].i,grid[i].j);
    let cellFits = true;
    for(let i=0 ; i<revealedCellVecs.length ; i++)
    {
      if(abs(thisCellVec.dist(revealedCellVecs[i])-revealedCells[i].dist)>=1)
      {
        cellFits = false;
        break;
      }
    }

    if(cellFits)
    {
      predictions.push(grid[i]);
    }
  }
}

function getIndex(i,j)
{
  return i*cols+j;
}

function mousePressed()
{
  if(pmouseX<600 && pmouseY<600)
  {
    let r = floor(pmouseY/w);
    let c = floor(pmouseX/w);
    worker.i = r;
    worker.j = c;
    console.log(worker.i,worker.j);
    grid[getIndex(r,c)].revealed = true;
  }
}

function toggleMap()
{
  for(let i=0 ; i<grid.length ; i++)
  {
    grid[i].revealed = !grid[i].revealed;
  }
}

function keyPressed() {
  if(key=='T')
  {
    toggleMap();
  }
  if(key=='M')
  {
    moveWorker();
  }
  if(key=='P')
  {
    predictSource();
  }
}
