//EYES
// Week 12
// create a variable for the ball object
let eyes = [];
let eyes2 = [];
let eyes3 = [];
//Declare Global Varibales
let moveX = 0;
let moveY = 0;

function setup() {
  frameRate(15);
    createCanvas(windowWidth, windowHeight);
    background(204);
    //Loops to fill eye arrays with the Eye class x3
    for(var i = 0; i < 20; i ++){
      eyes[i] = new Eye(width/2, height/2, floor(random(10, 75)), randomColor(), 250);
    }
    for(var i = 0; i < 20; i ++){
      eyes2[i] = new Eye(windowWidth/2 - 500, windowHeight/2, floor(random(10, 75)), randomColor(), 150);
    }
    for(var i = 0; i < 20; i ++){
      eyes3[i] = new Eye(windowWidth/2 + 500, windowHeight/2, floor(random(10, 75)), randomColor(), 150);
    }
  }


function draw() {
  background(0);
  //Draw rain center and large
  Rain(windowWidth/2, windowHeight/2, 250);
  //Draw two more smaller Rain on either side of center Rain.
  Rain(windowWidth/2 - 500, windowHeight/2, 150);
  Rain(windowWidth/2 + 500, windowHeight/2, 150);
  //Draw Puddle twice one on bottom one on top.
  Puddle(width/2, -10, 'rgb(75, 152, 214)');
  Puddle(width/2, height+10, 'rgb(75, 152, 214)')

//For loop to draw all three of the eyes arrays
  for( let i = 0; i < eyes.length; i++){
    // call the ball's methods
    eyes[i].display();
    eyes[i].move();
    eyes[i].edgeCheck();
    eyes2[i].display();
    eyes2[i].move();
    eyes2[i].edgeCheck();
    eyes3[i].display();
    eyes3[i].move();
    eyes3[i].edgeCheck();
  }

}
//USE RANDOM COLORS
function randomColor() {
    return color(floor(random(200, 256)), 0, floor(random(51, 256)) );
}
  //////////////////////
 ////PUDDLE FUNCTION///
//////////////////////
function Puddle(x, y, color){
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(4);
  fill(color);
  //Draw ellipse for base
  ellipse(0, 0, 800, 200);
  noFill();
  //For loop to create expanding rings
  for(let x = 0; x < 800; x += 50){
    ellipse(0, 0, moveX + x, moveY + x/4);
    //if statement to contain rings within base ellipse
    if(moveX > 50){
      moveX = 0;
      moveY = 0;
    }
    //set in motion
    moveX += .04;
    moveY += .01;
  }
pop();
}
  /////////////////////
 ////RAIN FUNCTION////
/////////////////////
function Rain(x , y, radius){
//Define local variables
let diameter = radius*2;
let colr = floor(random(150, 255));
let colg = floor(random(125, 255));
let colb = floor(random(50, 255));
let lineLength = 0;
lineLength = random(0, 20);
push();
//generate random color for stroke
stroke(colr, colg, colb);
//ellipse(x, y, diameter); REFERENCE FOR CIRCLE BOUNDS THAT CONTAIN THE RAIN
//TRANSLATE TO INPUT ORIGIN
translate(x, y);
//FOR LOOPs to create grid of lines
  for(var i = -height; i < height; i += 20){
    for(var x = -radius - 20; x < radius + 20; x += random(10, 20)){
      //Create distance variable to create boundaries
      let d = dist(0, 0, x, i);
      //Draw line inside of circle bound
      if(d < radius){
        line(x, i, x, i + lineLength);
      }
    }
    //set in motion
    i += .5;
  }
  pop();
}

//////////////////////////////////////////////////
//      EYE CLASS DEFINITION
//////////////////////////////////////////////////
class Eye {
    constructor(x, y, size, color, bounds) {
      //DEFINE VARIABLES
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-4, 4);
        this.deltaY = random(-4, 4);
        this.ring = 0;
        this.size2 = size * 2;
        this.rad2 = this.size2 / 2;
        this.circleX = x;
        this.circleY = y;
        this.bounds = bounds;
    }

    display() {
        push();
        fill(this.color);
        ellipse(this.posX, this.posY, this.size2);
        noFill();
        //Loop of expanding circle, starts at 0x0 expands to 500 new circle every 50
        for(var w = 0; w < this.size2; w+=10){
          stroke('rgb(241, 231, 119)');
          stroke(0);
          // ELLIPSE FOR BLUE EXPANDING CIRCLES
          ellipse(this.posX, this.posY, this.ring + w);
          //SET ELLIPSES IN MOTION (move .5 every frame)
          this.ring += .1;
          // if statement to respawn circles
            if(this.ring > 10){
              //starts new circle once ellipse is greater than 50 width
              this.ring = 0;
            }
          }
        fill("black");
        ellipse(this.posX, this.posY, this.size);
        pop();
    }
    //SET IN MOTION
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }
    //EDGE CHECK FOR CIRCLE BOUNDARY
    edgeCheck() {
      var d = dist(this.circleX, this.circleY, this.posX, this.posY);
      if(d + this.rad2 > this.bounds || d - this.rad2 > this.bounds){
        this.deltaX *= -1;
        this.deltaY *= -1;
      }
  }
}
