let WIDTH = 600;
let HEIGHT = 600;

let input;
let inputRadius = 110;

let index = 0;

let mutationRate = 4;
let populationSize = 20;
let outputs = [];
let outputFitnesses = [];

let generations = 0;
let numberSurveyed = 0;

function setup()
{
  createCanvas(WIDTH,HEIGHT);
  input = new Circle(300,300,inputRadius,true);
  createFirstGeneration();
  frameRate(60);
}

function draw()
{
  background(240);
  input.show();
  numberSurveyed++;
  outputs[index].show();
  fill(0);
  noStroke();
  textSize(50);
  text("Generation : " + generations,130,500);
  textSize(20);
  text("Number of elements surveyed : " + numberSurveyed ,140,550);
  textSize(32);
  if(outputs[index].r==inputRadius)
  {
    textSize(32);
    text("MATCH FOUND",180,100);
    console.log("FOUND");
    noLoop();
    return;
  }
  else
  {
    text("NO MATCH",210,100);
  }
  index++;
  if(index>=populationSize)
  {
    index=0;
    generations++;
    createNewGeneration(outputs,outputFitnesses);
  }
}

function createFirstGeneration()
{
  console.log("Generation : ",generations);
  outputs = [];
  outputFitnesses = [];
  for(let i=0 ; i<populationSize ; i++)
  {
    let r = round(random(0,200));
    let c = new Circle(300,300,r,false);
    let f = checkFitness(c);
    outputs.push(c);
    outputFitnesses.push(f);
    console.log(c.r,f);
  }
}

function createNewGeneration(lastGeneration,lastGenerationFitnesses)
{
  console.log("Generation : ",generations);
  outputs = [];
  fitnesses = [];
  outputFitnesses = [];
  let total = 0;
  //Get total
  for(let i=0 ; i<populationSize ; i++)
  {
    total += lastGenerationFitnesses[i];
  }
  //Normalize values and store in fitnesses
  for(let i=0 ; i<populationSize ; i++)
  {
    fitnesses[i] = lastGenerationFitnesses[i]/total;
  }
  //Make new generation with populationSize elements
  for(let i=0 ; i<populationSize-1 ; i++)
  {
    let r = random();
    let k = getIndexFromRandom(r,fitnesses)
    let parentRadius = lastGeneration[k].r
    let newRadius = parentRadius;
    newRadius += round(random(-mutationRate,mutationRate));;
    let c = new Circle(300,300,newRadius,false);
    let f = checkFitness(c);
    outputs.push(c);
    outputFitnesses.push(f);
    console.log(c.r,f);
  }
  let r = random();
  let k = getIndexFromRandom(r,fitnesses)
  let parentRadius = lastGeneration[k].r
  let newRadius = round(random(0,200));
  newRadius += round(random(-mutationRate,mutationRate));;
  let c = new Circle(300,300,newRadius,false);
  let f = checkFitness(c);
  outputs.push(c);
  outputFitnesses.push(f);
  console.log(c.r,f);
}

function getIndexFromRandom(r,fitnesses)
{
  for(let i=0 ; i<fitnesses.length-1 ; i++)
  {
    if(r<fitnesses[i])
    {
      return i;
    }
  }
  return fitnesses.length-1;
}

function checkFitness(circle)
{
  let difference = abs(circle.r-input.r);
  let fitness = round(map(difference,0,100,10,0));
  return fitness;
}
