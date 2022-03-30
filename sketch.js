var rua ,ruaimage;
var menino,meninoimage;
function preload(){
 meninoimage = loadAnimation("Runner-1.png","Runner-2.png");
 ruaimage = loadImage("path.png");
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua = createSprite(200,200);
  rua.addImage(ruaimage);
  rua.velocityY = 4;
  menino = createSprite(180,340,30,30);
  menino.addAnimation("correndo",meninoimage);
  menino.scale = 0.08;
}

function draw() {
  background(0);
  if(rua.y>400){
    rua.y = height/2;
  }
  menino.x = World.mouseX;
drawSprites();

}
