const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,polygon;

function preload(){
polygonImg  = loadImage("football.png");
}

function setup() {
  var canvas =  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,height,1000,20);
  stand = new Ground(600,300,370,20);

  block1 = new Block1(450,265,50,50);
  block2 = new Block1(500,265,50,50);
  block3 = new Block1(550,265,50,50);
  block4 = new Block1(600,265,50,50);
  block5 = new Block1(650,265,50,50);
  block6 = new Block1(700,265,50,50);
  block7 = new Block1(750,265,50,50);

  block8 = new Block2(500,215,50,50);
  block9 = new Block2(550,215,50,50);
  block10 = new Block2(600,215,50,50);
  block11 = new Block2(650,215,50,50);
  block12 = new Block2(700,215,50,50);

  block13 = new Block4(550,115,50,50);
  block14 = new Block4(600,115,50,50);
  block15 = new Block4(650,115,50,50);

  block16 = new Block5(600,65,50,50);
  
  polygon = Bodies.polygon(50,80,6,20);
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:200, y:50});

}

function draw() {
  background(0,0,0);
  Engine.update(engine);
 
  ground.display();
  stand.display();
  
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
  
 imageMode(CENTER);
 image(polygonImg, polygon.position.x, polygon.position.y,50,50);
  //polygon.display();

  
  slingShot.display();
  
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX, y : mouseY});
}

function mouseReleased(){
  slingShot.fly();
}