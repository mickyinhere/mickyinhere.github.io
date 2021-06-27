let octahedron;

function preload() {
  octahedron = loadModel('3d_100.obj');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  clear();
  //background(200);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  specularMaterial(250);
  model(octahedron);
}
