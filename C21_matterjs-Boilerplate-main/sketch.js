const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,top1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground= new Ground(200,390,400,20);
 
  top1 = new Ground(200,10,400,20);
  left = new Ground(10,200,20,400);
  right = new Ground(390,200,20,400);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
 fill("blue")
  ground.show();
  fill("red");
top1.show();
fill("green")
  left.show();
  fill("orange");
  right.show();
  Engine.update(engine);
}

