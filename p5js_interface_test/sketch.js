var x;
var slider;
var r, g, b;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  r = 255;
  g = 255;
  b = 255;

  createP('Move the ellipse back and forth.');

  slider = createSlider(0, width, width / 2);
  slider.input(updateX);
  button = createButton("Click to change color");
  button.mousePressed(changeFill);

}

function updateX() {
  x = slider.value();
}


function draw() {
  background(220);
  fill(r, g, b);
  ellipse(x, height / 2, 100);
}

function changeFill() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}