class Ball {
    constructor(x,y,radius) {
        var balloptions = {

            restitution: 0.4,
            friction:0.02,
           
        }
        
        this.body = Bodies.circle(x,y,radius, balloptions);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
      push()
        ellipseMode(RADIUS);

        fill("magenta");

        ellipse(this.body.position.x, this.body.position.y, this.radius);
pop()
    }       
}