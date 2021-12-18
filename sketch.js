var tower
var towerImage

function preload(){
  towerImage = loadImage ("tower.png")
}

function setup(){
  createCanvas(550,600);
  tower = createSprite(250,250);
  tower.addImage("tower image",towerImage)
  tower.velocityY = 2
}

function draw(){
  drawSprites()
  
  if (tower.Y > 400){
  tower.Y = 300
      
      }
}