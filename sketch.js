var gameState="start";
var backgroundImg;
var bing;
var bunny;
var koala;
var carrot1,carrot;
var char;
var player;
var c1,c2;
var level1;

function preload(){
backgroundImg=loadImage("images/backgroung.jpg");
koala=loadImage("images/k.png");
bunny=loadImage("images/bunny.png");
carrot=loadImage("images/carrot.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(displayWidth-100,displayHeight-100);
 
  player.visible=false;
  
  c1= createSprite(displayWidth/2-150,displayHeight/2,50,50);
  c1.addImage(bunny);
  c1.scale=1.2
  c1.visible=false;
  c2= createSprite(displayWidth/2+150,displayHeight/2,50,50);
  c2.addImage(koala);
  c2.scale=0.8 
  c2.visible=false;
  level1=new Maze();

  carrot1=createSprite(50,100,50,50);
  carrot1.addImage(carrot)
  carrot1.scale=0.3
  carrot1.visible=false;
}

function draw() {
  background(backgroundImg);
  if(gameState==="start"){
  c1.visible=true;
  c2.visible=true;
    textSize(30);
    fill(255);
    text("Choose your character",displayWidth/2-150,displayHeight/2-200);
   if(mousePressedOver(c1)){
    char=bunny;
    gameState="play" 
   
   }
   if(mousePressedOver(c2)){
    char=koala;
    gameState="play" 
   
   }
   drawSprites();
  } 
  if(gameState==="play"){

    player.addImage(char);
    c1.remove();
    c2.remove();
    player.visible=true;
    player.scale=0.5;
    level1.display();

    carrot1.visible=true;

    if(keyDown(UP_ARROW)){
      player.y-=2
    }

    if(keyDown(DOWN_ARROW)){
      player.y+=2
    }
   
    if(keyDown(LEFT_ARROW)){
      player.x-=2
    }

    if(keyDown(RIGHT_ARROW)){
      player.x+=2
    }
  
   
  }
  

}