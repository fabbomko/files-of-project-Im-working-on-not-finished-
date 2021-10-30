
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let groundObj;
let leftWall;
let rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
		

	//Create the Bodies Here.

	ball = Bodies.circle(200, 550, 20, ball_options);
	World.add(ball);


	groundObj = new Ground(width/2, 670, width, 20);
	leftWall = new Ground(1100, 600, 20, 120 );
	rightWall = new Ground(1100, 600, 20, 120);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ballposition.x, ballposition.y, 20);
  drawSprites();
groundObj.display();
leftWall.display();
rightWall.display();
}

function keypressed(){
	if (keyCode === UP_ARROW) {
		ball = Bodies.applyforce(ball, 20,40 );
	}
}


