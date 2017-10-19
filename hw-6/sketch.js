//Jack Lawless
//Creative Coding 220 Section 51
//October 18th, 2017

//I couldn't seem to organize the top variables into an myObj = {}; without corrupting the program
var angle = 0.0;
var offset = 0.75;
var scalar = 20;
var speed = 0.05;
var size = 5;
var x ;
var y = 0 ;
// color variable
var col = {
  r: 0,
  g: 0,
  b: 255,
  alpha: 255
};
//position variable for background ellipse
var pos = {
  w: 0,
};


function setup(){
createCanvas(windowWidth, windowHeight);
background('rgb(99, 0, 145)');

}
function draw(){
  noStroke();
  translate(windowWidth/2, 0);
  //randomize alpha value between 150 and 200
  col.alpha = random(150, 200 );
  //size of cicles in sine wave variable dependent upon mouse.
  size = map(mouseX, 0, width, 5, 15);

//Sandbox for background circle
  push();
  noFill();
  stroke(col.r , 150, 0, 75);
  ellipse(0, windowHeight/2, pos.w);
  //randomize movement speed of ellipse
  pos.w += floor(random(2, 10));
  //bound ellipse to width of canvas
  pos.w = pos.w % width;
  pop();
// If statement to bound pattern and increase scalar upon each pass
  if(y > height){
    y = 0;
    scalar += pow(2, 4);
  //x + 500;
  }
  //reset after scalar after it has become very large
  if(scalar > 500){
    angle = 0.0;
    scalar = 20;
  }
//randomize r g and b to a nice set of colors
  col.r = floor(random(0, 255));
  col.g = floor(random(0 , 100));
  col.b = floor(random( 100, 200));
  fill(col.r, col.g, col.b, col.alpha);
  ellipse(x,  y, size);
  ellipse(-x,  y, size);
  //create sin wave movement (horizontal)
  x = ((offset + sin(angle)) * scalar);
  //create vertical movement
  y += 2;
  // update angle based upon speed.
  angle += speed;

}
