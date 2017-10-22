let changeViewButton;
let mySound;
let originalView = true;

let charges = [];
let lightening = [];
let sparkCount = 0;
let or,oc;

let rows,cols;
let scl = 20;

let formed = false;
let afterformed = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds.mp3');
}

function setup()
{
  createCanvas(600,600);
  ellipseMode(RADIUS);
  textAlign(CENTER,TOP);
  rectMode(CORNERS);

  changeViewButton = createButton("Change View");
  //changeViewButton.position(250,85);
  changeViewButton.mousePressed(changeView);

  rows = height/scl;
  cols = width/scl;
  oc = round(random(2,cols-1));
  or = round(random(0,2));
  let s = new Spark(or,oc,sparkCount);
  lightening.push(s);

  for(let row=0 ; row<30 ; row++)
  {
    let v = map(row,0,30,-128,128);
    for(let col=0 ; col<30 ; col++)
    {
      let off = round(random(-3,3));
      let vv = v + off;
      let c = new Charge(row,col,vv)  ;
      charges.push(c);
    }
  }

  mySound.setVolume(1);
  //mySound.play();
  mySound.loop();
}

function draw()
{
  background(240);
  if(originalView)
  {
    fill(16);
    rect(0,0,width,height);
  }
  drawBorders();
  showGrid();

  if(!formed)
  {
    console.log(lightening.length);
    let thisCell = lightening[lightening.length-1];
    let tr = thisCell.r;
    let tc = thisCell.c;

    let rlb,rub,clb,cub;
    rlb = -1;
    rub = 1;
    if(tr==0 || tr==rows-1)
    {
      if(tr==0)
      {
        rlb = 0;
      }
      else
      {
        rub = 0;
      }
    }

    clb = -1;
    cub = 1;
    if(tc==0 || tc==cols-1)
    {
      if(tc==0)
      {
        clb = 0;
      }
      else
      {
        cub = 0;
      }
    }
    console.log(rlb,rub,clb,cub);
    let maxVal = charges[getIndex(tr,tc)].value;
    console.log(maxVal);
    let nr = tr;
    let nc = tc;
    for(let i=rlb ; i<=rub ; i++)
    {
      for(let j=clb ; j<=cub ; j++)
      {
        let nextCell = charges[getIndex(tr+i,tc+j)];
        console.log(nextCell.value);
        if(nextCell.value>maxVal)
        {
          console.log("tr");
          newPos = nextCell;
          maxVal = nextCell.value;
        }
      }
    }

    if(lightening.length<26)
    {
      let nr = newPos.r;
      let nc = newPos.c;
      sparkCount++;
      let s = new Spark(nr,nc,sparkCount);
      lightening.push(s);
    }
    else
    {
      console.log("DONE");
      formed = true;
      afterformed = 1;
    }
  }
  else
  {
    if(afterformed%10==0)
    {
      lightening = [];
    }
    else
    {
      afterformed++;
    }
  }

  if(!originalView)
  {
    for(let i=0 ; i<charges.length ; i++)
    {
      charges[i].show();
    }
  }

  for(let i=0 ; i<lightening.length ; i++)
  {
    lightening[i].show();
  }

  if(frameCount%400==0)
  {
    lightening = [];
    formed = false;
    sparkCount = 0;
    oc = round(random(2,cols-1));
    or = round(random(0,2));
    let s = new Spark(or,oc,sparkCount);
    lightening.push(s);
  }
}

function changeView()
{
  originalView = !originalView;
}

function showGrid()
{
  stroke(0);
  strokeWeight(1);
  for(let i=0 ; i<rows ; i++)
  {
    line(0,i*scl,width,i*scl);
  }

  for(j=0 ; j<cols ; j++)
  {
      line(j*scl,0,j*scl,height);
  }
}

function drawBorders()
{
  stroke(0);
  strokeWeight(5);
  line(1,1,width-1,1);
  line(width-1,1,width-1,height-1);
  line(width-1,height-1,1,height-1);
  line(1,height-1,1,1);
}

function getIndex(r,c)
{
  let i = r*cols + c;
  return i;
}
