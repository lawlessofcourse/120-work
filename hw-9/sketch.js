//bubble array
let bubble = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  //fill array and declare function
  for(var i = 0; i < 400; i++){
   bubble[i] = new Bubbles();
  }
}

function draw(){
  background(0);
  //for loop to display and move bubble
  for( let i = 0; i < bubble.length; i++){
  bubble[i].move();
  bubble[i].display();
  }
}

//if mouse is dragged shapes will apear
function mouseDragged(){
  bubble.push(new Bubbles(mouseX, mouseY));
}

//BUBBLES FUNCTION
function Bubbles(x, y){
  //create variables to make expanding circles
  let movement = 0;
  let motion = 0;
  let circleWidth = 2;
  let circleHeight = 2;
  //pos variables
  this.x = x;
  this.y = y;
  //function to display shape. shapes drawn here
  this.display = function(){
  //randomize stroke color
  stroke(random(50, 200), random(75, 200), random(168, 255));
  noFill();
  strokeWeight(2);
  //Loop of expanding circle, starts at 0x0 expands to 500 new circle every 50
  for(var w = 0; w < 100; w+= 25){
    // ELLIPSE FOR BLUE EXPANDING CIRCLES
    ellipse(this.x, this.y, circleWidth + w, circleHeight + w);
    //SET ELLIPSES IN MOTION (move .5 every frame)
    circleWidth = circleWidth + .15;
    circleHeight = circleHeight + .15;
    // if statement to respawn circles
      if(circleWidth > 25){
        //starts new circle once ellipse is greater than 50 width
        circleWidth  = 0;
        circleHeight  = 0;
      }
    }
    //outter circle to make it look nicer
    ellipse(this.x, this.y, 100, 100);
  }
  
  // MOVEMENT FUNCTION
  this.move = function(){
    //shape will remain at the mouseX point
    this.x += 0;
    //shape will fall at random speed from mouseY point
    this.y += random(2, 16);
  }
}
