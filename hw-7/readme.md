Jack Lawless, 51

[Live Sketch Link](https://lawlessofcourse.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

We have a ball that moves across the screen and when it reaches the edge of the screen or canvas it reverts direction and continues on. This is possible due to the if statements that are applied. The code within the if statements basically say "when ball x or y reaches the width or height multiply the direction variables by -1 to revert direction".

line 1 - 8: Ball object and its variables.

line 10-13 funtion setup. Create Canvas and color background

line 17: Draw function

line 19 - 20: set the ball in motion.

line 23-25: If ball reaches vertical wall revert direction

line 26-28: If ball reaches horizontal wall revert direction

line 30: color ball white.

line 31: draw ellipse using the ball object variables

line 34-37: Funtion mousePressed; returns any code within funciton and runs it if the mouse is clicked.

To make the ball change direction we used the mousePressed function. When we click the mouse we are basically altering the ball's motion variable with math. For example if you wanted to make the ball go in the reverse direction it is traveling all you have to do is multiply the ball's motion variable by -1.


## How did you alter the sketch?

I altered the sketch in a few different ways. First I changed the color(by randomizing it) and made it so that if the ball bounced off the vertical wall the fill color would be oppposite of previous. Also I changed the initial angle the ball traveled at, created a mouseCounter to be able to change the shape of the ball with each click which included adding if statements. So if you click the mouse once (after the sketch has started) the ball changes to a rectangle, and if you click again it changes back to an ellipse.
