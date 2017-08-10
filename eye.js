function Eye(x,y,r,t)
{
   this.center = createVector(x,y);
   this.iris = createVector(x,y);;
   this.radius = r;
   this.maxSpeed = 4;
   this.blinkTime = t;

   this.show = function(timer)
   {
     var vradius = this.radius;
     fill(255);
     stroke(0);
     strokeWeight(2);
     if(timer<this.blinkTime)
     {
        var theta = map(timer,0,this.blinkTime,0,180);
        vradius = abs(this.radius*cos(theta));
        ellipse(this.center.x,this.center.y,this.radius,vradius);
        fill(0);
        ellipse(this.iris.x,this.iris.y,this.radius/2,vradius/2);
     }
     else
     {
       ellipse(this.center.x,this.center.y,this.radius,this.radius);
       fill(0);
       ellipse(this.iris.x,this.iris.y,this.radius/2,this.radius/2);
     }
   }

   this.update = function(mouse)
   {
       var ctarget = p5.Vector.sub(mouse,this.center);
       ctarget.limit(this.radius/4);
       var target = p5.Vector.add(this.center,ctarget);
       var velocity = p5.Vector.sub(target,this.iris);
       var imag = velocity.mag();
       if(imag>this.radius/8)
       {
          velocity.setMag(this.maxSpeed);
       }
       else
       {
           var mag = map(imag,0,this.radius/8,0,this.maxSpeed);
           velocity.setMag(mag);
       }
       this.iris.add(velocity);
   }
};
