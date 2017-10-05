function setup()
{
  createCanvas(900, 900);
  background('rgb(185, 223, 255)');

}

function draw()
{
translate(450, 450);  // set origin to middle

//Body Parameters
push();                                           //Sandbox for body
  //TAIL
  //WINGS COMPLETE
  fill('rgb(1, 126, 29)');                            //Color Wings darker green
  triangle(-10, 120, -140, -100, -400, 200);        //Wing 1 LEFT
  triangle(10, 120, 140, -100, 400, 200);           //Wing 2 RIGHT
  //INSIDE WING Color
  push();
  fill('rgba(15, 66, 26, 0.45)');
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20);
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);
  translate(0, 20)
  triangle(-30, 130, -145, -55, -390, 210);
  triangle(30, 130, 145, -55, 390, 210);

  pop();
  //NEGATIVE OF WINGS
  noStroke();
  fill('rgb(185, 223, 255)');                      //Nackground color for negative
  triangle(-435, 220, -145, 100, 0, 170 );       //negative part of wing 1
  quad(-435, 219, 0, 169, 0, 400, -435, 400);
  triangle(435, 220, 145, 100, 0, 170 );          //negative part of wing 2
  quad(435, 219, 0, 169, 0, 400, 435, 400);
  stroke(0);
  //CLAWS
  fill('rgb(211, 235, 18)');
  // Claws on Wings RIGHT SIDE
  triangle(140, -100, 129, -80, 110, -120 );
  triangle(110, -120, 90, -100, 120, -113.25);
  triangle(140, -100, 155, -83, 170, -120 );
  triangle(170, -120, 190, -90, 160, -113.25);
  //Claws on Wings LEFT SIDE
  triangle(-140, -100, -129, -80, -110, -120 );
  triangle(-110, -120, -90, -100, -120, -113.25);
  triangle(-140, -100, -155, -83, -170, -120 );
  triangle(-170, -120, -190, -90, -160, -113.25);

  //BODY
  fill('rgb(12, 122, 2)');                        //Color body
  rect(-60, -55, 120, 350, 0, 0, 80, 80);         //Rectangle body with rounded bottom

  //STOMACH
  push();
    fill('rgb(231, 230, 149)');                       //Stomach Color
    quad(-55, -55, 55, -55, 40, 280, -40, 280);       //Stomach
    arc(0, 275, 80, 42, radians(0), radians(180));    //Bottom of Stomach
    line(-12, 294, 12, 294);                          //Lines on Stomach from bottom to top of body
    line(-32, 287, 32, 287);
    line(-40, 279, 40, 279);
    line(-40, 270, 40, 270);
    translate(0, -12);
    line(-40, 270, 40, 270);
    translate(0, -14);
    line(-40, 270, 40, 270);
    translate(0, -16);
    line(-40, 270, 40, 270);
    translate(0, -18);
    line(-40, 270, 40, 270);
    translate(0, -20);
    line(-40, 270, 40, 270);
    translate(0, -22);
    line(-40, 270, 40, 270);
    translate(0, -24);
    line(-40, 270, 40, 270);
    translate(0, -26);
    line(-40, 270, 40, 270);
    translate(0, -28);
    line(-40, 270, 40, 270);
    translate(0, -30);
    line(-40, 270, 40, 270);
    translate(0, -32);
    line(-40, 270, 40, 270);
    translate(0, -34);
  pop();

  //LEGS
  push();                                         //sandbox for legs and claws
    scale(1.25);                                  //Make legs/claws larger
    translate(0, -50);                            //Move legs/claws up on screen
    fill('rgb(8, 69, 2)');                          //Darker green for legs
    quad(-45, 220, -35, 270, -90, 280, -100, 250);  //Upper leg LEFT
    quad(-100, 250, -70, 250, -60, 350, -80, 350);  //Lower leg LEFT
    quad(45, 220, 35, 270, 90, 280, 100, 250);      //Upper leg RIGHT
    quad(100, 250, 70, 250, 60, 350, 80, 350);      //Lower leg RIGHT

    //FEET/CLAWS
    fill('rgb(211, 235, 18)');                      //fill w/ dark purple
    triangle(-80, 350, -70, 360, -100, 360);        //Claw 1 left upper
    triangle(-100, 360, -90, 355, -90, 380);        //Claw 1 left lower
    triangle(-75, 370, -70, 355, -70, 380);         //Claw 2 left lower
    triangle(-80, 350, -60, 350, -75, 370);         //Claw 2  left upper

    triangle(80, 350, 70, 360, 100, 360);           //Claw 1 left upper
    triangle(100, 360, 90, 355, 90, 380);           //Claw 1 left lower
    triangle(75, 370, 70, 355, 70, 380);            //Claw 2 left lower
    triangle(80, 350, 60, 350, 75, 370);            //Claw 2  left upper
  pop();
pop();

//COMPLETE HEAD
push(); //Sandbox for complete head
//HEAD SHAPE

translate(0, -40);
  fill('rgb(58, 138, 50)');
  strokeWeight(2);
  ellipse(0, 55, 80, 60);                         //round BOTTOM of head
  strokeWeight(2);
  ellipse(0, -40, 135, 150);                      //round TOP of head
  noStroke();
  quad(-40, 55, 40, 55, 65, -40, -65, -40);       //head shape

  //EYES
  stroke(0);
  strokeWeight(1);
  fill("yellow");                                 //set color eye background
  ellipse(-30, -40, 18, 20);                      //first circle for eye
  fill("red");                                    //set color eye middle
  ellipse(-30, -40, 5, 20);                       //middle eye , pupil
  fill("yellow");                                 //Repeat eye and reflect on y axis
  ellipse(30, -40, 18, 20);
  fill("red");
  ellipse(30, -40, 5, 20);

  //BROWS
  fill('rgba(0, 0, 0, 0)');                           //make fill transparent
  strokeWeight(8);                                    //Set thickness
  arc(-30, -95, 40, 55, radians(90), radians(190));   //upper brow curve LEFT
  arc(30, -95, 40, 55, radians(350), radians(90));    //upper brow curve RIGHT
  fill('rgba(0, 0, 0, 0)');
  arc(-30, -40, 40, 55, radians(270), radians(340));  //lower brow curve LEFT
  arc(30, -40, 40, 55, radians(200), radians(270));   //lower brow curve RIGHT
  fill('rgb(185, 223, 255)');                         //fill with background color to create negative object
  strokeWeight(4);                                    // no stroke
  arc(0, -110, 140, 45, radians(20), radians(160));   //arc used to 'indent' head
  strokeWeight(0);
  ellipse(0, -110, 140, 42);                          //ellipse to fill background in above head
  strokeWeight(2);                                    // set stroke weight for remaining objects

  //HORNS
  push();                                         //Sandbox horn transformations
    fill(0);                                      //fill horns dblack
    strokeWeight(5);
    translate(0, -96);                            //Set origin to move horns up
    triangle(-51, 0, -45, -10, -47, 5);          //Horn LEFT
    triangle(51, 0, 45, -10, 47, 5);             //Horn RIGHT
    strokeWeight(1);
  pop();                                          //Pop horn sandbox


  //COMPLETE MOUTH AND NOSE
  push();                                   //Sandbox for mouth and nose
    translate(0, 20);                         //Set orgin up 20y from previous translate
      //MOUTH
      push();                                   //new sandbox for transformations
        scale(1.1);
        fill(0);
        quad(-15, -5, 15, -5, 25, 5, -25, 5);     //Uper mouth
        translate(0, 50);                         //Set origin to line up shapes
        fill(0);                                  //Black fill color
        scale(1.0, -1.0);                         //used to flip image
        quad(-20, 15, 20, 15, 25, 45, -25, 45);   //Lower Mouth
        ellipse(0, 15, 40, 15);                   //Round bottom of mouth
      pop();                                    //Pop sandbox for transformations
    //Top Teeth Triangles
    push();
      fill(220);                                    //fill teeth white
      stroke(0);
      strokeWeight(2);
      triangle(-30, 0, -20, 25, -10, 0);            // Big tooth LEFT
      triangle(30, 0, 20, 25, 10, 0)                //Big tooth RIGHT
      triangle(0, 0, -10, 0, -5, 10);               //Small tooth LEFT
      triangle(0, 0, 10, 0, 5, 10);                 //Small tooth RIGHT
      //Bottom Teeth
        push();                                   //Sandbox for bottom teeth
          translate(0, 45);                         //set origin to bottom of mouth
          scale(0.6,-0.6);                          //Flip on x-axis
          triangle(-30, 0, -20, 25, -10, 0);        //Big tooth LEFT
          triangle(30, 0, 20, 25, 10, 0)            //Big tooth RIGHT
        pop();                                    //Pop Bottom teeth sandbox
    pop();
    //Snout/Dimples/Nose
    fill('rgb(58, 138, 50)');
    stroke(1);
    arc(-20, -10, 45, 30, radians(15), radians (145)); //left dimple/snout
    arc(20, -10, 45, 30, radians(35), radians (165));  //right dimple/snout
    fill(0);                                           //fill nostrils black
    ellipse(-10, -10, 10, 5);                          //Nostril LEFT
    ellipse(10, -10, 10, 5);                           //Nostril RIGHT
  pop();                                             //pop sandbox for mouth and nose.
pop();                                             // pop sandbox for head.


}
