function setup() {
  createCanvas(1000, 1000, WEBGL);
   slider = createSlider(0, 10000, 1000000);
  slider.position(100, 1005);
  slider.style('width', '200px');
}

function draw() {
  clear();
  //background(255,170,200);
  var val = slider.value();
  //background(val);
  //erase();
  //background(200);
  erasecube(val);
  //noErase();
  cube(50,50);
  cube(75,90);
  cube(100,0);
  cube(150,90);
  cube(200,60);
  cube(275,0);
  cube(275,0);

 
  
}
function erasecube(size) {
   erase();
  push();
  fill(255);
  translate(0, -0, -1000);
  //small box
  box(size,size,size);
  pop();
  noErase();
      
}
function cube(size,color) {
  push();
  noFill();
  //small box
  stroke(color);
  translate(0, 0, 0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(size,size,size);
   pop();
      
}
