let octahedron;

function preload() {
  octahedron = loadModel('3d_100.obj');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  clear();
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(octahedron);
}
