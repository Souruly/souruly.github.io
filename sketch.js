var rainbow;
var pos;
var score;
var timer;

function preload()
{
    rainbow = loadImage("images.png");
}

function setup() 
{
    frameRate(60);
    createCanvas(800,600);
    imageMode(CORNERS);
    pos = 0;
    score = 0;
    timer = 0;
    
}

function draw() 
{
    background(0);
    image(rainbow,50,50,750,550);
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
    text(score,15,30);
    if(score>0 && timer < 1201)
    {
        timer++;
    }
    var sec = floor(timer/60);
    text(sec,700,30)
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
