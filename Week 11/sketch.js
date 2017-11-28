// Ball Class Example
// Week 11


// create a variable for the ball object
let eyes = [];

function setup() {
  frameRate(30);
    createCanvas(windowWidth, windowHeight);
    background(204);
    for(var i = 0; i < 33; i ++){
      var x = random(width);
      var y = random(height);
      var r = i + 2;
      eyes[i] = new Eye(width/2, height/2, floor(random(10, 100)));
    }
  }


function draw() {
  background('rgb(207, 214, 123)');
  for( let i = 0; i < eyes.length; i++){
    // call the ball's methods
    eyes[i].display();
    eyes[i].move();
    eyes[i].edgeCheck();
  }
}


//////////////////////////////////////////////////
//      EYE CLASS DEFINITION
//////////////////////////////////////////////////
class Eye {
    constructor(x, y, size) {
        this.color = "red";
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
        this.ring = 0;
        this.size2 = size * 2;
    }

    display() {
        push();
        translate(this.posX, this.posY);

        fill('rgb(43, 127, 184)');
        ellipse(0, 0, this.size2);
        noFill();
        //Loop of expanding circle, starts at 0x0 expands to 500 new circle every 50
        for(var w = 0; w < this.size2; w+=15){
          stroke('rgb(237, 119, 241)');
          // ELLIPSE FOR BLUE EXPANDING CIRCLES
          ellipse(0, 0, this.ring + w);
          //SET ELLIPSES IN MOTION (move .5 every frame)
          this.ring += .5;
          // if statement to respawn circles
            if(this.ring > 15){
              //starts new circle once ellipse is greater than 50 width
              this.ring = 0;
            }
          }
        fill("black");
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }
}
