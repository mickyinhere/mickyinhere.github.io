let angle=0;
function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  angle+=1;
  rotateX(angle);
  rotateZ(angle);
  box(100);
}