const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,wrapper1,wrapper2,bottle,bin;
var wrapper1img,wrapper2img,bottleimg,binimg;
var garbageCollected=0;
var bts,btsimg;

function preload() {
 
  
  bg= loadImage("background.jpg")
  wrapper1img= loadImage("wrapper.png")
  wrapper2img=loadImage("wrapper1.png")
  bottleimg=loadImage("bottle.png")
  binimg=loadImage("bin.png")
  btsimg=loadImage("trashmeme.jpg")
  
}

function setup() {
  createCanvas(1000,500);
 
  engine = Engine.create();
  world = engine.world;
  
  bin=createSprite(100,380)
  bin.addImage(binimg)

  wrapper1=createSprite(400,400)
  wrapper1.addImage(wrapper1img)
  wrapper1.scale=0.2

  wrapper2=createSprite(700,370)
  wrapper2.addImage(wrapper2img)
  wrapper2.scale=0.4
  
  bottle=createSprite(500,480)
  bottle.addImage(bottleimg)
  bottle.scale=0.4

  bts=createSprite(900,400)
  bts.addImage(btsimg)
  bts.scale=0.5
}

function draw() {
  background(bg);
  
if(mousePressedOver(wrapper1)){
wrapper1.destroy()
garbageCollected=garbageCollected+1;
}

if(mousePressedOver(wrapper2)){
  wrapper2.destroy()
  garbageCollected=garbageCollected+1;
  }

  if(mousePressedOver(bottle)){
    bottle.destroy()
    garbageCollected=garbageCollected+1;
    }

    if(mousePressedOver(bts)){
      bts.destroy()
      garbageCollected=garbageCollected+100
      }
  
      text("garbageCollected: "+ garbageCollected,400,20)

      if(garbageCollected>103){
        fill("black")
        textSize(20)
        text("congratulations you have cleaned the garbage in your surrounding well done",200,250)
      }

  drawSprites();
}