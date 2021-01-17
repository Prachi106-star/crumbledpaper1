
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	
}




function setup() {
	createCanvas(1700,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  var ground_options ={
	isStatic: true
}
ground = new Ground(200,350,3000,20);
paper = new Paper();
dustbin = new Dustbin(1100,220,20,200);
dustbin1 = new Dustbin1(1400,220,20,200);
dustbin2 = new Dustbin2(1250,330,290,20)


  drawSprites();
 paper.display();
 ground.display();
 dustbin.display();
 dustbin1.display();
 dustbin2.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	   	Matter.Body.applyForce(paper.body,{x=200,y=200});
	}
}

