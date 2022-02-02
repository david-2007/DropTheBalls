
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1=60
var angle2=60
var angle3=60
function preload()
{
	
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world =engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (400,675,800,20);
	roof2 = new Roof (150,400,200,20);
	roof3 = new Roof (650,400,200,20);
	ball1 = new Ball (600,50,10);
	ball2 = new Ball (250,50,10);
	ball3 = new Ball (200,50,10);
	ball4 = new Ball (350,50,10);
	ball5= new Ball (650,50,10);
	ball6 = new Ball (700,50,10);
	ball7 = new Ball (350,50,10);
	ball8 = new Ball (450,50,10);
	ball9 = new Ball (400,50,10);
	ball10 = new Ball (250,50,10);
	ball11= new Ball (550,50,10);
	ball12 = new Ball (50,50,10);
	var rodor_options = {
		isStatic: true,
	}

Rodor1=Bodies.rectangle(400,200,150,20,rodor_options)
World.add(world,Rodor1)
Rodor2=Bodies.rectangle(400,200,150,20,rodor_options)
World.add(world,Rodor2)
Rodor3=Bodies.rectangle(400,200,150,20,rodor_options)
World.add(world,Rodor3)



/*var ball_options={
	restitution:0.4 ,
	friction:0.02
	}*/

}
//ball1 = Bodies.circle(220,10,10,ball_options);
//World.add(world,ball1);
function draw() {
  //rectMo=(CENTER);
 
  background('lightgreen');
 Engine.update(engine)
roof1.display();
roof2.display();
roof3.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
ball8.display();
ball9.display();
ball10.display();
ball11.display();
ball12.display();
Matter.Body.rotate(Rodor1,angle1)
	push();
	translate(Rodor1.position.x,Rodor1.position.y );
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1+=1;

	Matter.Body.rotate(Rodor2,angle1)
	push();
	translate(Rodor2.position.x,Rodor2.position.y );
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2+=2;

	Matter.Body.rotate(Rodor3,angle1)
	push();
	translate(Rodor3.position.x,Rodor3.position.y );
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3+=3;



}

