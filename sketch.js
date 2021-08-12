var ship, shipImage;
var ground, groundImage;

function preload(){
shipImage = loadAnimation("ship-1.png", "ship-2.png")
groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  ground = createSprite(200, 200)
  ground.addImage(groundImage)
  ship = createSprite(50, 500, 10, 10)
  ship.addAnimation("sailing", shipImage);
  ship.scale=0.1
 ground.velocityX=-5
}

function draw() {
  background("blue");
  if(ground.x<0) {
    ground.x = ground.width/2
  }
 drawSprites();
}

