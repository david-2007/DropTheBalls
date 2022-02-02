class Rodor {
    constructor (x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display () {
       	       
  Matter.body.rotate(rodor1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y );
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1+=0.2;
}
}