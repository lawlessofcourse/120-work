//Jack Lawless
//MART 220
//October 25th, 2017

var ball = {};      //ball variable
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 3;
ball.delta_y = 4;
ball.scale_x = 3;
ball.scale_y = 4;
var col = {};       //color variable
col.r = 0;
col.g = 0;
col.b = 0;
col.alpha = 0;
var mouseCounter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}



function draw() {
  //randomize strokeWeight
  strokeWeight(random(0, 2));
  //Put the ball in motion using x and y values(diagonal)
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
  //randomize the width of the ball
    ball.width = floor(random(5, 40));
//set and randomize color variables
    col.r = 0;
    col.g = floor(random(150, 200));
    col.b = floor(random(200, 255));
    col.alpha = ceil(random(0, 100));
//MODULOS mouse counter so it is equal to zero or one
    mouseCounter = mouseCounter % 2;
//if statement to bounce ball off of vertical wall and color ball
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
        fill(col.r, col.g, col.b, col.alpha);
        stroke(col.r, col.b, col.g);
    }
//if statement to bounce ball off of horizontal wall and color ball opposite of previous
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
        col.r = col.g;
        col.g = 0;
          stroke(col.r, col.b, col.g);
        fill(col.r, col.g, col.b, col.alpha);
    }
//if statement to switch between ellipse and rectangle everytime mouse is clicked
    if(mouseCounter == 0){
      ellipse(ball.x, ball.y, ball.width, ball.width);
    }else{
      rect(ball.x, ball.y, ball.width, ball.width );
    }
}

//Mouse pressed function(everything in here will execute when mouse is clicked)
//mouse counter counts, angle and speed change(increase), return false
function mousePressed() {
  mouseCounter++;
  ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  ball.scale_y = map(mouseY, 0, height, 0.5, 10);
return false;

}
