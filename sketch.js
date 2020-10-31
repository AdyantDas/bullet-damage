var bullet,wall,thickness;
var speed,weight;
var damage;


function setup() {
  createCanvas(800,400);
  speed=random(200,100);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(5,200,50,50);
  wall=createSprite(380,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;


  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  
    bullet.velocityX=0;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

 
  drawSprites();
}




 

