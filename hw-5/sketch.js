
var movement = 0;   //function for ring movement
var motion = 0;     //funtion for ring motion
var starsMove = 0;  //function to create moving stars background

function setup(){
  //canvas is window size
  createCanvas(windowWidth, windowHeight);
  //frame rate 1/2 usual
  frameRate(30);
}

function draw(){
//no cursor when in window
noCursor();
background('rgb(1, 22, 55)');
//SANDBOX FOR MOVING STARS
push();
  translate(0, 0);
  //SET IN MOTION
  starsMove = starsMove + 30;
  stroke(200);
  strokeWeight(1);
  //TWO FOR LOOPS TO FILL SCREEN WITH LINES
  for(x = 0; x <= width*2; x += 250){
    for(y = 0; y <= height; y += 100){
    line(starsMove+x-y, y, starsMove+(x + 10)-y, y);
      //IF STATEMENT TO RESPAWN STARS IF THEY BECOME MORE THAN 250
      if(starsMove > 250){
        starsMove=0;
      }
    }
  }
  pop();


//CALL ROCKET FUNCTION AT MOUSE LOCATION
rocket(mouseX, mouseY);
}

//ROCKET FUNCTION
function rocket(x,y){
//PUSH ORIGIN
translate(x, y);
//set rings in motion with:
motion = motion + 39;
movement = movement + 20;

// SANDBOX FOR ROCKET
push();
//Make rocket smaller
scale(height * .001);
strokeWeight(3);
fill('rgb(207, 226 ,53)');
stroke('rgb(255, 145, 0)');
//FOR LOOP: to create "endless" circle loop.
for(var x = 0; x <= width; x += 80){
  //Draw ellipse
  ellipse(motion + x, 0, 140, 80);
  //If ring moves more than 80 spawn new ellipse
    if (motion > 80){
      motion = 0;
    }
}
noFill();
stroke('rgb(221, 1, 1)');
strokeWeight(4);
  //FOR LOOP: second loop for second set of ellipses
  for(var x = 60; x <= width; x += 40){
    ellipse(movement + x, 0, 180, 120);
    //if statement: respawn ring if it becomes more than 40
    if (movement > 40){
    movement= 0;
    }
  }
//DRAW ROCKET
stroke('rgb(30, 196, 132)');
strokeWeight(4);
fill('rgb(0, 117, 148)');
rect(-200, -60, 250, 120 );
fill('rgb(40, 40, 40)');
textSize(30);
text("LAWLESS", -190, -20);
triangle(-300, 0, -200, -60, -200, 60 );
triangle(-80, 0, 80, -80, 80, 80 );
//pop rocket sandbox
pop();
}
