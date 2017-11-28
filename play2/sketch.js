
let dist = [];


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(127.5);
}
function draw(){
stroke(0.25);
  for( let x = 0; x < width; x+=10){
    for(let y = 0; y < height; y+=25){
    line(x, y+random(0, 5), x, y+random(5, 20));
    y += 2;
    }
  }
}
