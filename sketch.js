//Create variables here
 var dog,happyDog,database,foodS,foodStock,dogimg;

function preload()
{
  //load images here
  dogimg = loadImage('images/dogImg.png');
  dogHappy = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,300,100,100);
  dog.addImage(dogimg);
  dog.scale = 0.5;
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on('value',readStock);
  
}


function draw() {
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  stroke(100);
  textSize(30);
  fill('red');
  text("Food: " + foodS,650,50) ;

}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



