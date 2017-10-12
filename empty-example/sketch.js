var movement = 0;
var motion = 0;


function setup(){
  createCanvas(windowWidth, windowHeight);
frameRate(15);

}
function draw(){
background(210);
  push();
  //Set origin to middle
  translate(windowWidth/2, windowHeight/2);
  fill('rgb(255, 236, 248)');
  strokeWeight(4);
  ellipse(0, 0, 800, 510);
  fill('rgb(27, 122, 191)');
  strokeWeight(8);
  ellipse(0, 0, 510, 510);
  pop();

  //SANDBOX FOR ALL EXPANDING CIRCLES
  push();
  //Set origin to middle
  translate(windowWidth/2, windowHeight/2);
  noFill();
  strokeWeight(3);
  //Loop of expanding circle, starts at 0x0 expands to 500 new circle every 50
  for(var w = 0; w < 500; w+=50){

    //SANDBOX FOR EXPANDING CIRCLES SHADOW
    push();
      //COLOR AND MAKE TRANSPARENT
      stroke('rgba(0, 0, 0, 0.85)');
      strokeWeight(3);
      ellipse(0, 0, circleWidth + w - 5, circleHeight + w - 5);
    pop();
    stroke('rgb(4, 191, 90)');
    // ELLIPSE FOR BLUE EXPANDING CIRCLES
    ellipse(0, 0, circleWidth + w, circleHeight + w);
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
  ellipse(0, 0, 210, 210);
pop(); //pop ellipse sandbox
}
