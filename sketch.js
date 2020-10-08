
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(250,100,250,20)
	ball1 = new Ball(250,300);
	rope1 = new Rope(ball1.body, {x: 250, y: 100});
	ball2 = new Ball(290,300);
	rope2 = new Rope(ball2.body, {x: 290, y: 100});
	ball3 = new Ball(210,300);
	rope3 = new Rope(ball3.body, {x: 210, y: 100});
	ball4 = new Ball(330,300)
	rope4 = new Rope(ball4.body, {x: 330, y: 100});
	ball5 = new Ball(170,300);
	rope5 = new Rope(ball5.body, {x: 170, y: 100});

	Engine.run(engine);
  
}


function draw() {
  background(100);

  roof.display();
  rope1.display();
  ball1.display();
  rope2.display();
  ball2.display();
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();
  rope5.display();
  ball5.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x:-40,y:-30});
	}
}



