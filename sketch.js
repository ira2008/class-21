var movingrect,fixedrect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 50);
 movingrect=createSprite(700,200,30,60);
 movingrect.velocityX=5;
 fixedrect.velocityX=-5;
 rect1=createSprite(300,300,60,70);
 rect2=createSprite(400,400,50,60);
}

function draw() {
  background("yellow"); 
 rect1.x=mouseX;
 rect1.y=mouseY;
  bounceOff(movingrect,fixedrect);
  
if(Collided(rect1,rect2)){
  rect1.shapeColor="blue";
  rect2.shapeColor="green";
} 
else{
rect1.shapeColor="purple";
rect2.shapeColor="purple";
} 
  drawSprites();
}
