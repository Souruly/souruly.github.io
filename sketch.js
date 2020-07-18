// let winWidth = 1200;
// let winHeight = 600;

let morseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
let morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","...--","....-",".....","--...","---..","----.","-----"]

let dictSize = 36;

let myIndex, myMorseChar, myMorseCode;
let myBlanks;
let currPointer;

let animationMaxFrames = 5;
let animationFrameCounter = 0;
let answer = true;

function setup() {
  createCanvas(windowWidth, windowWidth);
  textAlign(CENTER, CENTER)
  getNewMorse()
}

function getNewMorse(){
  myIndex = floor(random(36));
  myMorseChar = morseChars[myIndex];
  myMorseCode = morseCodes[myIndex];
  currPointer = 0;
  myBlanks = new Blanks(myMorseCode.length, myMorseCode);
  animationFrameCounter = 0;
  answer = true;
}

function draw() {
  if(animationFrameCounter>0)
  {
    if(answer)
    {
      background(0,255,0);
    }
    else
    {
      background(255,0,0);

    }
    animationFrameCounter -= 1
  }
  else
  {
    background(240);
  }
  noStroke()
  fill(0);
  textSize(48);
  text("MORSE TRAINER", width/2, 50);
  textSize(120)
  myBlanks.display();
  text(morseChars[myIndex], width/2,300);
  // text(morseCodes[myIndex], width/2,300);  
  stroke(0);
  strokeWeight(2);
  // line(width/2, 0 , width/2, height);
}

function keyTyped()
{
  let currData = myMorseCode[currPointer]
  if(key===currData)
  {
    myBlanks.correct += 1;
    currPointer += 1
    animationFrameCounter = animationMaxFrames;
    answer = true;
  }
  else
  {
    if(key=='.' || key=='-')
    {
      animationFrameCounter = animationMaxFrames;
      answer = false;
    }
  }
  if(currPointer>=myMorseCode.length)
  {
    getNewMorse();
  }
  
}

function Blanks(size,blankData)
{
  this.size = size;
  this.data = blankData;
  this.correct = 0;
  this.halfBlankSize = 50;
  this.interBlankDist = 20;
  this.y = 450;

  this.display = function()
  {
    let n = this.size;
    let dispStart = width/2 - (n*this.halfBlankSize+(n-1)*(this.interBlankDist/2));
    let dispX = dispStart;
    for(let i=0 ; i<this.size ; i++)
    {
      stroke(0);
      strokeWeight(5);
      if(i<this.correct)
      {
        noStroke();
        text(this.data[i], dispX+this.halfBlankSize, this.y);
        stroke(0,255,0);
      }
      line(dispX, this.y+50, dispX + 2*this.halfBlankSize, this.y+50);
      dispX += 2*this.halfBlankSize+this.interBlankDist;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
