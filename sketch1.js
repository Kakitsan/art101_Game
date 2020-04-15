var s;
var scl = 40;
var food;
var foodcount = 0;
let bgimg;
let snakeimg;
let foodimg;

function preload(){
  bgimg = loadImage('bg.png');
  foodimg = loadImage('apple.png');
  snakeimg = loadImage('snake.png');
}

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  foodcount ++;
  console.log(foodcount);
}

function draw() {
  if(this.foodcount > 2 & this.foodcount < 5){
    frameRate(15);
  }
  else if(this.foodcount > 6){
    frameRate(25);
  }
  else if(this.foodcount < 1){
    frameRate(10);

  }
  background(bgimg);


  if (s.eat(food)){
      pickLocation();

      }
  s.update();
  s.show();
  s.death();

  fill(255, 0, 100);
  image(foodimg, food.x, food.y, scl + 10, scl + 10);
}


function keyPressed(){
    if(keyCode === UP_ARROW){
     s.dir(0, -1);
     }
    else if(keyCode === DOWN_ARROW){
     s.dir(0, 1);
     }
    else if(keyCode === RIGHT_ARROW){
     s.dir(1, 0);
     }
    else if(keyCode === LEFT_ARROW){
     s.dir(-1, 0);
     }
}
