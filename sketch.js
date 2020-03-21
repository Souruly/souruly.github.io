let mapImage;
let mapImageW = 5135;
let mapImageH = 3857;
let showMap = true;

let nodeNum = 1;
let nodes = []
let taxis = []
let busses = []
let undergrounds = []
let startPointSet=false;
let startNodeIndex = null;
let endPointSet=false;
let endNodeIndex = null;
let thisTransport;
let downloadButton;

function preload() {
  mapImage = loadImage('map.jpg')
}

function setup() {
  createCanvas(mapImageW, mapImageH);
  textAlign(CENTER,CENTER);
  downloadButton = createButton('Download Nodes List');
  downloadButton.mousePressed(downloadNodesJSON);
}

function draw() {
  background(51);
  if(showMap)
  {
    image(mapImage, 0, 0);
  }
  noFill();
  stroke(0);
  strokeWeight(6);
  ellipse(mouseX,mouseY,70,70);
  stroke(255);
  for(let i=0 ; i<taxis.length ; i++)
  {
    taxis[i].show()
  }
  stroke(0,102,204);
  for(let i=0 ; i<busses.length ; i++)
  {
    busses[i].show()
  }
  stroke(255,0,0);
  for(let i=0 ; i<undergrounds.length ; i++)
  {
    undergrounds[i].show()
  }
  stroke(0);
  strokeWeight(5);
  for(let i=0 ; i<nodes.length ; i++)
  {
    nodes[i].show()
  }
}

function mousePressed()
{
  if (keyIsPressed === true) {
    if(key=='n')
    {
      console.log("N pressed")
      let n = new Node(nodeNum, mouseX,mouseY);
      nodes.push(n);
      nodeNum++;
    }
    if(key=='t')
    {
      if(startPointSet==false)
      {
        startPointSet=true;
        let nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Taxi started at" + (nodes[nnIndex].number));
        thisTransport = new TaxiTransport();
        thisTransport.startNode = nodes[nnIndex];
        startNodeIndex = nnIndex;
      }
      else
      {
        endPointSet=true;
        nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Taxi ended at" + (nodes[nnIndex].number));
        thisTransport.endNode = nodes[nnIndex];
        taxis.push(thisTransport);
        endNodeIndex = nnIndex;
        setTransport("taxi",startNodeIndex,endNodeIndex);
        startPointSet = false;
        endPointSet = false;
        startNodeIndex = null;
        endNodeIndex=null;
      }
    }
    if(key=='b')
    {
      if(startPointSet==false)
      {
        startPointSet=true;
        let nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Bus started at" + (nodes[nnIndex].number));
        thisTransport = new BusTransport();
        thisTransport.startNode = nodes[nnIndex];
        startNodeIndex = nnIndex;
      }
      else
      {
        endPointSet=true;
        nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Bus ended at" + (nodes[nnIndex].number));
        thisTransport.endNode = nodes[nnIndex];
        busses.push(thisTransport);
        endNodeIndex = nnIndex;
        setTransport("bus",startNodeIndex,endNodeIndex);
        startPointSet = false;
        endPointSet = false;
        startNodeIndex = null;
        endNodeIndex=null;
      }
    }
    if(key=='u')
    {
      if(startPointSet==false)
      {
        startPointSet=true;
        let nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Underground Rail started at" + (nodes[nnIndex].number));
        thisTransport = new UndergroundTransport();
        thisTransport.startNode = nodes[nnIndex];
        startNodeIndex = nnIndex;
      }
      else
      {
        endPointSet=true;
        nnIndex = findNearestNodeIndex(mouseX, mouseY);
        console.log("Underground Rail ended at" + (nodes[nnIndex].number));
        thisTransport.endNode = nodes[nnIndex];
        undergrounds.push(thisTransport);
        endNodeIndex = nnIndex;
        setTransport("underground",startNodeIndex,endNodeIndex);
        startPointSet = false;
        endPointSet = false;
        startNodeIndex = null;
        endNodeIndex=null;
      }
    }
  }
}

function findNearestNodeIndex(mX, mY)
{
  let minDist = 100;
  let minIndex = -1;
  for(let i=0 ; i<nodes.length ; i++)
  {
    let d = dist(mX, mY, nodes[i].x, nodes[i].y);
    if(d<minDist)
    {
      minDist = d;
      nnIndex = i;
      if(d<50)
      {
        return i;
      }
    }
  }
  return minIndex;
}

function setTransport(transportType, sI, eI)
{
  if(transportType=="taxi")
  {
    if(!nodes[sI].taxi.includes(nodes[eI].number))
    {
      nodes[sI].taxi.push(nodes[eI].number);
    }
    if(!nodes[eI].taxi.includes(nodes[sI].number))
    {
      nodes[eI].taxi.push(nodes[sI].number);
    }
  }
  if(transportType=="bus")
  {
    if(!nodes[sI].bus.includes(nodes[eI].number))
    {
      nodes[sI].bus.push(nodes[eI].number);
    }
    if(!nodes[eI].bus.includes(nodes[sI].number))
    {
      nodes[eI].bus.push(nodes[sI].number);
    }
  }
  if(transportType=="underground")
  {
    if(!nodes[sI].underground.includes(nodes[eI].number))
    {
      nodes[sI].underground.push(nodes[eI].number);
    }
    if(!nodes[eI].underground.includes(nodes[sI].number))
    {
      nodes[eI].underground.push(nodes[sI].number);
    }
  }
}

function keyTyped()
{
  if(key=='m')
  {
    showMap = !showMap;
  }
  if(key=='d')
  {
    nodes.pop(); 
    nodeNum--;
  }
}

function downloadNodesJSON()
{
  let nodesListString = JSON.stringify(nodes);
  console.log(nodesListString);
  copyTextToClipboard(nodesListString);

}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}