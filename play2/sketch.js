let moveX = 0;
let moveY = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);

}
function draw(){
  translate(windowWidth/2, windowHeight/2);
  background(127.5);
  Puddle(0, -height/2, 'rgb(75, 152, 214)');
  Puddle(0, height, 'rgb(75, 152, 214)');

}

function Puddle(x, y, color){
  translate(x, y);
  strokeWeight(4);
  fill(color);
  ellipse(0, 0, 800, 200);
  noFill();
  for(let x = 0; x < 800; x += 40){

    ellipse(0, 0, moveX + x, moveY + x/4);

    if(moveX > 40){
      moveX = 0;
      moveY = 0;
    }
    moveX += .04;
    moveY += .01;
  }

}
