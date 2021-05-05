const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rocket,meteor,bg_img;
var meteor_img,rocket_img;

function preload(){
  bg_img=loadImage("pro19 background.jpg");
  meteor_img=loadImage("meteorites pro19.png");
  rocket_img=loadImage("rocketpro.jpg");
}
function setup() {

  engine = Engine.create();
	world = engine.world;

  meteorGroup=new Group();

  createCanvas(1300,600);
  rocket=createSprite(400,500,50,50);
  rocket.addImage("rocket",rocket_img);
  rocket.scale=0.3;
  meteor=createSprite(Math.round(random(350,25)),100,10,10);
meteorGroup.add(meteor);
  meteor.addImage("meteor",meteor_img);
 meteor.scale=0.3;
  
  
}

function draw() {
  background(bg_img);

  if(keyDown(UP_ARROW)){
    rocket.velocityX=0;
    rocket.velocityY=-2;
  }
  else if (keyDown(DOWN_ARROW)){
    rocket.velocityX=0;
    rocket.velocityY=2;
  }
  else if (keyDown(LEFT_ARROW)){
    rocket.velocityX=-2;
    rocket.velocityY=0;
  }
  else if(keyDown(RIGHT_ARROW)){
    rocket.velocityX=2;
    rocket.velocityY=0;
  }

  rocket.display();
  meteor.display();
  drawSprites();
}