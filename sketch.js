var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudImage;
var cloudGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var obstacle5,obstacle6,obstaclesGroup,gameState;
var play,end;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
   
  gameState = play
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background(10);
    trex.collide(invisibleGround);
  trex.velocityY = trex.velocityY + 0.8 
  if (gameState == play){
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  

  if (trex.collide(obstaclesGroup)){
    gameState = end
  }
  //obstaclesGroup.collide(invisibleGround)
   spawnClouds();
  spawnObstacles();
 
}
if (gameState == end){
cloudsGroup.setVelocityeachX = 0
obstaclesGroup.velo
}
   drawSprites();
}

function spawnClouds(){
 if (World.frameCount%60 === 0) {
  var clouds = createSprite(600,70,30,30);
  clouds.addImage(cloudImage);
  clouds.velocityX = -5 ;
  clouds.scale = 0.7;
  clouds.y = random(50,80);
  clouds.lifetime = 130;
  trex.debth = clouds.debth+1
  cloudsGroup.add(clouds)
 }
  
}

function spawnObstacles(){
  if (World.frameCount%120 === 0){  
  var obstacle = createSprite(600,170,30,30);
  obstacle.velocityX = -5
  obstacle.lifetime = 130;
  var r = Math.round(random(1,6));
  switch(r){
    case 1:obstacle.addImage(obstacle1);
    break;
    case 2:obstacle.addImage(obstacle2);
    break;
    case 3:obstacle.addImage(obstacle3);
    break;
    case 4:obstacle.addImage(obstacle4);
    break;
    case 5:obstacle.addImage(obstacle5);
    break;
    case 6:obstacle.addImage(obstacle6);
    break;
    default:break;
  }
  obstacle.scale = 0.5
  obstaclesGroup.add(obstacle)
} 
}