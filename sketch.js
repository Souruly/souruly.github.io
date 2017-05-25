var SIZE = 600;
var redLength,greenLength;
var routeLength = 15;
redLength = greenLength = 15;
var metroImageSize = 4015;
var mapImageSize = 6607;
var iterations = 300;
var count = 0;

var changeParameter = 2;
var xgreen = [395,641,849,1225,1473,1637,1843,1963,2171,2497,2621,2789,2965,3469,3775];
var ygreen = [3579,3563,3497,3575,3455,3311,3037,3024,3034,2992,2862,2678,2540,2262,2111];

var xred = [411,639,863,1139,1313,1381,1519,1713,1717,1735,1843,1935,2020,2062,2066];
var yred = [189,427,658,1002,1387,1627,1985,2220,2504,2852,3037,3124,3387,3603,3793];

var xgnew = [3118,3296,3318,3485,3590,3651,3734,3818,3963,4105,4173,4271,4320,4496,4647];
var ygnew = [4914,4903,4910,4900,4849,4806,4702,4598,4640,4587,4519,4403,4109,4304,4119];

var xrnew = [61,2935,3755,3429,3529,3382,3555,3781,3649,3721,3734,3839,3772,3859,3979];
var yrnew = [28,2255,3115,3433,3679,3831,3964,4078,4186,4574,4702,4635,4780,4899,5031];

var xginc = [];
var yginc = [];
var glen = [];

var xrinc = [];
var yrinc = [];
var rlen = [];

function optimize()
{
    for(var i=0 ; i<routeLength ; i++)
    {
       xgreen[i] = Math.round((xgreen[i]/metroImageSize)*SIZE);
       ygreen[i] = Math.round((ygreen[i]/metroImageSize)*SIZE);
       xred[i] = Math.round((xred[i]/metroImageSize)*SIZE);
       yred[i] = Math.round((yred[i]/metroImageSize)*SIZE);

       xgnew[i] = Math.round((xgnew[i]/mapImageSize)*SIZE);
       ygnew[i] = Math.round((ygnew[i]/mapImageSize)*SIZE);
       xrnew[i] = Math.round((xrnew[i]/mapImageSize)*SIZE);
       yrnew[i] = Math.round((yrnew[i]/mapImageSize)*SIZE);
    }
}

function getIncrements()
{
   getIncGreen();
   getIncRed();
}

function change()
{
   for(var i=0;i<routeLength;i++)
   {

      if(count<glen[i])
      {
         xgreen[i] = xgreen[i] + xginc[i];
         ygreen[i] = ygreen[i] + yginc[i];
      }
      if(xred[i]!=Math.round(xrnew[i]) && yred[i]!=Math.round(yrnew[i]))
      {
         xred[i] = xred[i] + xrinc[i];
         yred[i] = yred[i] + yrinc[i];
      }
      /*
      xgreen[i] = (xgreen[i] + xgnew[i])/2;
      ygreen[i] = (ygreen[i] + ygnew[i])/2;
      xred[i] = (xred[i] + xrnew[i])/2;
      yred[i] = (yred[i] + yrnew[i])/2;
      */
   }
}

function getIncGreen()
{
    for(var i=0;i<routeLength;i++)
    {
       var dx,dy,length;
       dx = xgnew[i] - xgreen[i];
       dy = ygnew[i] - ygreen[i];
       if(Math.abs(dx)>Math.abs(dy))
       {
          length = Math.abs(dx);
       }
       else
       {
          length = Math.abs(dy);
       }
       xginc.push(dx/length);
       yginc.push(dy/length);
       glen.push(length);
    }
}

function getIncRed()
{
    for(var i=0;i<routeLength;i++)
    {
       var dx,dy,length;
       dx = xrnew[i] - xred[i];
       dy = yrnew[i] - yred[i];
       if(Math.abs(dx)>Math.abs(dy))
       {
          length = Math.abs(dx);
       }
       else
       {
          length = Math.abs(dy);
       }
       xrinc.push(dx/length);
       yrinc.push(dy/length);
    }
    rlen.push(length);
}

function drawMap()
{
   /*
   fill(25
   rect(0,0,SIZE,SIZE);
   noFill();
*/
   for(var i=0;i<xred.length;i++)
   {
          strokeWeight(3);
          stroke(255,0,0);
          line(Math.round(xred[i]),Math.round(yred[i]),Math.round(xred[i+1]),Math.round(yred[i+1]));
   }

   for(var i=0;i<xgreen.length;i++)
   {
          strokeWeight(3);
          stroke(0,255,0);
          line(Math.round(xgreen[i]),Math.round(ygreen[i]),Math.round(xgreen[i+1]),Math.round(ygreen[i+1]));
   }
   /*
   for(var i=0;i<xrnew.length;i++)
   {
          strokeWeight(3);
          stroke(51,0,0);
          line(xrnew[i],yrnew[i],xrnew[i+1],yrnew[i+1]);
   }

   for(var i=0;i<xgreen.length;i++)
   {
          strokeWeight(3);
          stroke(0,51,0);
          line(xgnew[i],ygnew[i],xgnew[i+1],ygnew[i+1]);
   }
   */
   noStroke();
}

function setup()
{
  createCanvas(SIZE,SIZE);
  frameRate(30);
  optimize();
  getIncrements();
}

function draw()
{
  count++;
  if(count<=iterations)
  {
     background(255);
     stroke(0);
     fill(0);
     strokeWeight(3);
     triangle(576,50,590,50,582,36);
     text("N",578,70)
     noFill();
     noStroke();
     drawMap();
     change();
  }
}
