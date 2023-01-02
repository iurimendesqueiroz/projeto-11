
function preload(){
  ship_moviment = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png")
  seaImage = loadImage("sea.png")
  
}

function setup(){
  createCanvas(410,300);
  
  sea = createSprite(410,140,0,0);
  sea.addImage("sea",seaImage);
  sea.scale = 0.2
  sea.velocityX = -2

  ship= createSprite(200,200,0,0)
  ship.addAnimation("moviment", ship_moviment)
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = 410
}
drawSprites();

}