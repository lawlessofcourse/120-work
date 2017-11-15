var movement = 0;
var motion = 0;
var circleWidth = 2;
var circleHeight = 2;
var col = {};
col.r = 0;
col.g = 0;
col.b = 0;
let x = [];


function setup()
{
createCanvas(windowWidth, windowHeight);
frameRate(15);
}

function draw()
{
background(210);
for(let i = 0; i<width; i += 50);
eye(0, 200, .5);
}

function eye(x, y, size){
translate(x, y);
scale(size);
col.r = random(50);
col.g = random(200, 255);
col.b = random(175, 200);
  //Set origin to middle
/*fill('rgb(255, 236, 248)');
  strokeWeight(4);
  ellipse(0, 0, 800, 510);*/
  fill('rgb(27, 122, 191)');
  strokeWeight(8);
  ellipse(x, y, 510, 510);
  //SANDBOX FOR ALL EXPANDING CIRCLES
  push();
  noFill();
  strokeWeight(3);
  //Loop of expanding circle, starts at 0x0 expands to 500 new circle every 50
  for(var w = 0; w < 500; w+=50){
    //SANDBOX FOR EXPANDING CIRCLES SHADOW
    push();
      //COLOR AND MAKE TRANSPARENT
      stroke('rgba(0, 0, 0, 0.85)');
      strokeWeight(3);
      ellipse(x, y, circleWidth + w - 5, circleHeight + w - 5);
    pop();
    stroke(col.r, col.g, col.b);
    // ELLIPSE FOR BLUE EXPANDING CIRCLES
    ellipse(x, y, circleWidth + w, circleHeight + w);
    //SET ELLIPSES IN MOTION (move .5 every frame)
    circleWidth = circleWidth + .5;
    circleHeight = circleHeight + .5;
    // if statement to respawn circles
      if(circleWidth > 50 ){
        //starts new circle once ellipse is greater than 50 width
        circleWidth  = 0;
        circleHeight  = 0;
      }
    }
  fill('black');
  ellipse(x, y, 275, 275);
pop(); //pop ellipse sandbox
}
