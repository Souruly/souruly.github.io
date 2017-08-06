function Bird(x,y)
{
  this.position = createVector(x,y);
  this.velocity = createVector(random(-15,15),random(-15,15));
  this.acceleration = createVector(0,0);
  this.r = 3;
  this.maxSpeed = 3;
  this.maxForce = 0.15;
  this.neighborRadius = this.r*10;
  this.desiredSeparation = this.r*5;
  this.desiredRepulsion = this.r*10;

  this.show = function()
  {
    var theta = this.velocity.heading() + PI/2;
    fill(240);
    noStroke();
    push();
    translate(this.position.x,this.position.y);
    rotate(theta);
    //line(0,0,0,-20);
    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);
    pop();
    noStroke();
    noFill();
  }

  this.applyBehaviours = function(birds,obstacles)
  {
      var align = this.alignment(birds);
      var attract = this.cohesion(birds);
      var seperate = this.seperation(birds);
      var repel = this.repulsion(obstacles);
      align.mult(alignSlider.value());
      attract.mult(attractSlider.value());
      seperate.mult(seperateSlider.value());
      repel.mult(repelSlider.value());

      this.applyForce(align);
      this.applyForce(attract);
      this.applyForce(seperate);
      this.applyForce(repel);
  }

  this.applyForce = function(force)
  {
      this.acceleration.add(force);
  }

  this.update = function(birds,obstacles)
  {
    this.neighborRadius = neighborSlider.value();
    this.desiredSeparation = map(seperateRadiusSlider.value(),0,100,0,this.neighborRadius);
    this.desiredRepulsion = map(repelRadiusSlider.value(),0,100,0,this.neighborRadius);
    this.applyBehaviours(birds,obstacles);
    this.velocity.add(this.acceleration);
    this.velocity.setMag(4);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.checkEdges();
  }

  this.checkEdges = function()
  {
    if(this.position.x>WIDTH)
    {
       this.position.x = 0;
    }
    if(this.position.x<0)
    {
       this.position.x = WIDTH;
    }
    if(this.position.y>HEIGHT)
    {
       this.position.y = 0;
    }
    if(this.position.y<0)
    {
       this.position.y = HEIGHT;
    }
  }

  this.cohesion = function(birds)
  {
    var count = 0;
    var x = 0;
    var y = 0;
    var steer = createVector(0,0);
    for(var i=0 ; i<birds.length ; i++)
    {
      var d = p5.Vector.dist(this.position,birds[i].position);
      if(d>0 && d<this.neighborRadius)
      {
         x+=birds[i].position.x;
         y+=birds[i].position.y;
         count++;
      }
    }
    if(count>0)
    {
      x = x/count;
      y = y/count;
      var target = createVector(x,y);
      var desired = p5.Vector.sub(target,this.position);
      desired.normalize();
      desired.mult(this.maxSpeed);
      steer = p5.Vector.sub(desired,this.velocity);
      steer.limit(this.maxForce);
    }
    return steer;
  }

  this.seperation = function(birds)
  {
    var sum = createVector(0,0);
    var steer = createVector(0,0);
    var count = 0;
    for(var i=0 ; i<birds.length ; i++)
    {
      var d = p5.Vector.dist(this.position,birds[i].position);
      if(d>0 && d<this.desiredSeparation)
      {
         var diff = p5.Vector.sub(this.position,birds[i].position);
         diff.normalize();
         diff.div(d);
         sum.add(diff);
         count++;
      }
    }
    if(count>0)
    {
     sum.div(count);
     sum.normalize();
     sum.mult(this.maxSpeed);
     steer = p5.Vector.sub(sum,this.velocity);
     steer.limit(this.maxForce);
    }
    return steer;
  }

  this.repulsion = function(obstacles)
  {
    var sum = createVector(0,0);
    var steer = createVector(0,0);
    var count = 0;
    for(var i=0 ; i<obstacles.length ; i++)
    {
      var d = p5.Vector.dist(this.position,obstacles[i].position);
      if(d>0 && d<this.desiredRepulsion)
      {
         var diff = p5.Vector.sub(this.position,obstacles[i].position);
         diff.normalize();
         diff.div(d);
         sum.add(diff);
         count++;
      }
    }
    if(count>0)
    {
     sum.div(count);
     sum.normalize();
     sum.mult(this.maxSpeed);
     steer = p5.Vector.sub(sum,this.velocity);
     steer.limit(this.maxForce);
    }
    return steer;
  }

  this.alignment = function(birds)
  {
    var sum = createVector(0,0);
    var steer = createVector(0,0);
    var count = 0;
    for(var i=0 ; i<birds.length ; i++)
    {
      var d = p5.Vector.dist(this.position,birds[i].position);
      if(d>0 && d<this.neighborRadius)
      {
         sum.add(birds[i].velocity);
         count++;
      }
    }
    if(count>0)
    {
     sum.div(count);
     sum.mult(this.maxSpeed);
     steer = p5.Vector.sub(sum,this.velocity);
     steer.limit(this.maxForce);
    }
    return steer;
  }
};
