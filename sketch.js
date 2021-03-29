const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon_img;
var ground;
var launchingObject;
var engine,world;
var ball;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup(){
  var canvas = createCanvas(1300,600)
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(650,594,1300,15);

 airGround1 = new AirGround(533,465,260,10)

 ball = Bodies.circle(180,300,20)
 World.add(world,ball)

 block1 = new Block1(468,440,30,40);
 block2 = new Block1(500,440,30,40);
 block3 = new Block1(532,440,30,40);
 block4 = new Block1(564,440,30,40);
 block5 = new Block1(596,440,30,40);
 block6 = new Block1(628,440,30,40);
 block7 = new Block1(436,440,30,40);

 block8 = new Block2(500,399,30,40);
 block9 = new Block2(564,399,30,40);
 block10 = new Block2(596,399,30,40);
 block11 = new Block2(532,399,30,40);
 block12 = new Block2(468,399,30,40);

 block13 = new Block3(500,358,30,40);
 block14 = new Block3(532,358,30,40);
 block15 = new Block3(564,358,30,40);

 block16 = new Block2(532,317,30,40);

 launcherObject = new Launcher(this.ball,{x:180,y:300})
  
}

function draw(){

background(0,0,0)

//image(polygon,180,300,50,50);

Engine.run(engine);

ground.display();
airGround1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
launcherObject.display();

//detectollision(ball,block1);
//detectollision(ball,block2);
//detectollision(ball,block3);
//detectollision(ball,block4);
//detectollision(ball,block5);
//detectollision(ball,block6);
//detectollision(ball,block7);
//detectollision(ball,block8);
//detectollision(ball,block9);
//detectollision(ball,block10);
//detectollision(ball,block11);
//detectollision(ball,block12);
//detectollision(ball,block13);
//detectollision(ball,block14);
//detectollision(ball,block15);
//detectollision(ball,block16);


imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40)

}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

//function keyPressed() {
//	if (keyCode === 32) {
 //   Matter.Body.setPosition(this.ball, {x:235, y:420}) 
	//  launcherObject.attach(this.ball);
	//}
 //}

 //function detectollision(lball,lblock){
	/*var collision = Matter.SAT.collides(lball,lblock);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lblock,false);	
	}*/
  //blockBodyPosition=lblock.body.position
  //ballBodyPosition=lball.body.position
  
  //var distance=dist(ballBodyPosition.x, ballBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  //console.log(distance)
  //console.log(lblock.r+lball.r)
  //	if(distance<=lblock.r+lball.r)
    //{
      //console.log(distance);
  	 // Matter.Body.setStatic(lblock.body,false);
    //}

  //}
