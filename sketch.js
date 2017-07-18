var rainbow,logo;
var timer;
var score;
var pos;

function preload()
{
  rainbow = loadImage("Rainbow-3.png");
  logo = loadImage("Logo_Black.png");
}

function setup()
{
  createCanvas(800,600);
  timer = 0;
  score = 0;
  pos = 0;
}

function draw()
{
  background(0);
  image(rainbow, 50, 50 , 700 , 500);
  image(logo, 633, 0 , 167 , 50);
  if(timer>1200)
  {
    fill(255,0,0);
  }
  else
  {
    fill(255);
  }
  triangle(40+pos,575, 50+pos, 560, 60+pos, 575);
  textSize(32);
  text(score,15,35);
  if(score>0 && timer < 1201)
  {
    timer++;
  }
  var sec = floor(timer/60);
  text(sec,550,35);

  colorDecider = floor(score/15);
  rectMode(CORNERS);
  stroke(255);
  switch(colorDecider)
  {
     case 0 :
       fill(147,29,208);
       rect(500,10,530,40);
       fill(255);
       break;

     case 1 :
       fill(73,13,128);
       rect(500,10,530,40);
       fill(255);
       break;

     case 2 :
       fill(11,36,251);
       rect(500,10,530,40);
       fill(255);
       break;

     case 3 :
       fill(41,253,47);
       rect(500,10,530,40);
       fill(255);
       break;

     case 4 :
       fill(255,253,53);
       rect(500,10,530,40);
       fill(255);
       break;

     case 5 :
       fill(253,127,35);
       rect(500,10,530,40);
       fill(255);
       break;

     case 6 :
       fill(252,13,27);
       rect(500,10,530,40);
       fill(255);
       break;

     case 7 :
       fill(0);
       rect(500,10,530,40);
       fill(255);
       break;
  }
  noStroke();
}

function mousePressed()
{
  if(timer<1200)
  {
    pos = pos + (700/105);
    if(pos>700)
    {
        pos = 700;
    }
    score++;
  }
}

function keyPressed()
{
  if (keyCode == UP_ARROW)
  {
    timer = 0;
    score = 0;
    pos = 0;
  }
}
