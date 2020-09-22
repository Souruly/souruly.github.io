console.log("Sketch loaded")

let car, road
let carImg
var sketchDark = false

function preload() {
  let carImg = loadImage("../../sketches/1/car.png")
  car = new Car(0, 0, sketchDark)
  car.setImage(carImg)
}

function setup() {
  angleMode(DEGREES)
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent("canvasHolder")
  rectMode(CENTER)
  imageMode(CENTER)
  carX = width / 6
  carY = (5 * height) / 6
  car.reset(carX, carY, sketchDark)
  road = new Road(carY)
  road.build()
  car.reposition(road.roadBuildJump)
}

function draw() {
  if (sketchDark) {
    background(0)
  } else {
    background(255)
  }

  // console.log("Value of sketchDark :" + sketchDark)
  // console.log(window.location.pathname)

  if (window.location.pathname == "/") {
    road.show()
    car.show(road)
    car.update()
    road.update()
  } else {
    noLoop()
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight)
  carX = width / 6
  carY = (5 * height) / 6
  car.x = carX
  car.y = carY
  road = new Road(carY)
  road.build()
  car.reposition(road.roadBuildJump)
}
