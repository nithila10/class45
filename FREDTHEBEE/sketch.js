var bgImg, bg
var beeImg, bee
var flower, flowerImg


function preload() {
  bgImg=loadImage("bgpic.jpg")
  beeImg=loadImage("fred.png")
  flower1=loadImage("blue_flower.png")
  flower2=loadImage("orangeflow.png")
  flower3=loadImage("pink_flower.png")

}



function setup() {
  createCanvas(600,300);
  bg = createSprite(350,150)
  bg.velocityX= -7
  bg.addImage(bgImg)
  bg.scale=1.2
  
  bee = createSprite(70,230)
  bee.addImage(beeImg)
  bee.scale=0.35
 flowerGroup=new Group()
}

function draw() {
  background("blue"); 
  if(bg.x<200){
    bg.x = 400
  }
if(keyDown(UP_ARROW)){
   bee.velocityY=-5
}
bee.velocityY=bee.velocityY+0.5
  

  spawnFlowers();
  drawSprites();

}

function spawnFlowers() {
  if(frameCount%200===0){
    flower = createSprite(620,200)
    flower.velocityX=-3
    var rand = Math.round(random(1,3))
  switch(rand){
    case 1:flower.addImage(flower1)
    break
    case 2:flower.addImage(flower2)
    break
    case 3:flower.addImage(flower3)
    break
    default:break
  }
  flower.scale=0.1
  flower.y=Math.round(random(100,250))
  flower.lifetime=217
  flowerGroup.add(flower)
  }





}




