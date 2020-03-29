let gridDim = 20;
let rows,cols,wx,wy,pointR;
let drawing;
let gridCanvas;
let grid = []
let lastPoint;
let lines = []
let resetButton;

function setup()
{
  createCanvas(1200,600);
  drawing = createGraphics(600,600);
  drawing.background(240);
  gridCanvas = createGraphics(600,600);
  gridCanvas.background(240);
  
  drawing.textAlign(CENTER,CENTER);
  drawing.noStroke();
  drawing.textSize(48);
  drawing.fill(0,51);
  drawing.text("DRAW HERE",300,50);

  initializeGrid();
  drawGrid();
  createButtons();
}

function createButtons()
{
  resetButton = createButton("Reset Drawing");
  resetButton.mousePressed(resetDrawing)
}

function initializeGrid()
{
  if(gridDim<1)
  {
    gridDim = 1;
  }
  if(gridDim>60)
  {
    gridDim = 60;
  }
  rows = gridDim;
  cols = gridDim;
  wx = 600 / rows;
  wy = 600 / cols;

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    grid.push(row)
  } 
}

function drawGrid()
{
  pointR = round(map(gridDim,1,60,30,2));
  gridCanvas.stroke(0);
  for(let i=0 ; i<rows ; i++)
  {
    for(let j=0 ; j<cols ; j++)
    {
      gridCanvas.fill(255);
      gridCanvas.ellipse(wx / 2 + i * wx, wy / 2 + j * wy, pointR, pointR);
    }
  }
}

function draw()
{
  image(drawing,600,0);
  image(gridCanvas,0,0);
  drawStructure();
  stroke(0);
  drawing.stroke(0);
  drawing.strokeWeight(15);
  if (mouseIsPressed === true) {
    if (mouseX < 1200 && mouseX > 600 && mouseY < 600 && mouseY > 0) {
      let x1 = pmouseX-600;
      let x2 = mouseX - 600
      drawing.line(x1, pmouseY, x2, mouseY);
      let i1 = round(map(x1, 0, 600, 0, rows-1))
      let j1 = round(map(pmouseY, 0, 600, 0, cols-1))
      let i2 = round(map(x2,0,600,0,rows-1))
      let j2 = round(map(mouseY, 0, 600, 0, cols-1))
      if(lastPoint)
      {
        currentPoint = createVector(i2,j2);
        if (p5.Vector.dist(lastPoint, currentPoint) > 0 && p5.Vector.dist(lastPoint, currentPoint)<2)
        {
          gridCanvas.strokeWeight(2);
          gridCanvas.line(wx / 2 + lastPoint.x * wx, wy / 2 + lastPoint.y * wy, wx / 2 + currentPoint.x * wx, wy / 2 + currentPoint.y * wy);
          lastPoint = currentPoint;
        }
      }
      else
      {
        lastPoint = createVector(i1,j1);
        currentPoint = createVector(i2,j2);
      }
      grid[i2][j2] = true;
      gridCanvas.fill(0);
      gridCanvas.ellipse(wx / 2 + i2 * wx, wy / 2 + j2 * wy, pointR, pointR);

    }
    else
    {
      lastPoint = null;
    }
  }
  else
  {
    lastPoint = null;
  }
  
}

function drawStructure()
{
  fill(240);
  stroke(0);
  strokeWeight(2);
  line(1,1,1199,1);
  line(599,1,599,599);
  line(1199,599,1,599);
  line(1,599,1,1);
  line(1199,1,1199,599);
}

function resetDrawing()
{
  location.reload();
}