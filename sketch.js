var dog ,dogimg, happydog
var foodstock,foods,database



function preload()
{
	dogimg=loadImage("images/dogImg.png")
happydog=loadImage("images/happydog.png")



}

function setup() {
	createCanvas(500,500);
  dog=createSprite(100,250)
  dog.addImage(dogimg)
  dog.scale=0.3
  database=firebase.database()
  foodstock=database.ref('food')
  foodstock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(happydog)
  
}



  drawSprites();
  

}
function readStock(data){
  foods=data.val()
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

