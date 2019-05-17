var d = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 500; i++) {
    d.push(new Drop(random(0, windowWidth), random(0, windowHeight), random(2, 4)));
		// generate 500 raindrops at the start, these will be used throughout
  }
}

function draw() {
	// fade effect: shade background with alpha bkgd
	noStroke();
  fill(0, 25);
  rect(0, 0, width, height);

	// i'm guessing this updates each particle on screen?
  for (var i = 0; i < d.length; i++) {
    d[i].displ();
  }
}

function Drop(x, y, sp) {
  var x1 = x;
  var y1 = y;
  var x2;
  var y2;
  var s = sp;

  this.displ = function() {
    // converts mouse position. could also use map() to avoid mx <= 0
		var mx = mouseX / 120;
    if (mx <= 0) {
      mx = 0.5; // default, works as a failsafe. old one was too slow for me
    }

    y1 = y1 + s * mx; // scales speed according to mouse position
    x2 = x1;
    y2 = y1 + 30; // length of raindrops, change if they're too long/short

    stroke(200);
    line(x1, y1, x2, y2); // draws raindrop

    if (y1 >= windowHeight - 80) { // did the drop hit the ground?
			noFill();
      noStroke();
      fill(255, 150);
      ellipse(x1, windowHeight - random(5, 50), random(2, 5), random(1, 4)); // then draw a splash

			// renews the drop by sending it back to the top (no need to generate new ones)
			x1 = random(0, windowWidth);
      y1 = -120;
    }
  }

}
