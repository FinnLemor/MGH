
var monkey , monkey_running
var cloud ,cloudImage, obstacle, obstacleImage
var cloudGroup, obstacleGroup
var score
var T = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  cloudImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(50,370);
  monkey.addAnimation("abcd",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,380,400,20);
 
  ground.velocityX = -(6);
  
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
  background(200)
  
  monkey.collide(ground);
  
  ground.x = ground.width/2;
  
  
 if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  spawnClouds()
  spawnObstacles()
  
  stroke("green");
  textSize(20)
  fill("magenta");
  T = Math.ceil(frameCount/frameRate())
  text("Score "+ T, 100,50);
  
  drawSprites()
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    

    cloud.lifetime = 200;
  
    cloud.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    

    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(400,360,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    

    obstacle.lifetime = 200;
  
    obstaclesGroup.add(obstacle);
  }
  
}






