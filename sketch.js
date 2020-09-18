
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 var survivalTime = 0;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 400);  
 
  monkey = createSprite(100,340,20,20) 
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1;



 ground = createSprite(400,370,800,10) 
 ground.velocityX = -4;


FoodGroup = createGroup();
   obstacleGroup = createGroup();

  score = 0;

}


function draw() {
background("white");
 
  stroke("black")
  textSize(20);
  fill("black")
   survivalTime =Math.ceil(frameCount/frameRate ()) 
  text("Survival Time :" +survivalTime,100,50);
  
   text("Score: "+ score, 500,50);
  
  
  ground.x = ground.width/2;
  
   score = score + Math.round(getFrameRate()/60);
    
  
   if(keyDown("space")&&  monkey.y >= 200) {
         monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(ground)
  
  
  
  
  food();
  stone();
  drawSprites();
}


function food(){
  
  if (frameCount % 80 === 0){
   banana = createSprite(600,200,10,20)
 banana .y = Math.round(random(120,200));
    banana.addImage("banana", bananaImage)
 banana.scale = 0.1;
banana.velocityX= -7;
  banana.lifetime = 300;
    FoodGroup.add(banana);
  
  banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  
  }
}

function stone(){

  if (frameCount % 300 === 0){
   obstacle = createSprite(600,340,20,20) 
  obstacle.addAnimation("stone",obstaceImage)
  obstacle.scale=0.15;
obstacle.lifetime = 300;
 obstacle.velocityX= -9;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
    
    
  }
}



