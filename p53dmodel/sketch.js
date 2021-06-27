let octahedron;

function preload() {
  octahedron = loadModel('3d_100.obj');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  clear();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  
  
   push();
  
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  specularMaterial(160,110,250,255);
  noStroke();
  scale(10);
  model(octahedron);
  pop();
 
   push();

  rotateX(frameCount * 0.00101);
  rotateY(frameCount * 0.00101);
  specularMaterial(250,250,250,155);
  noStroke();
  scale(9.5);
  model(octahedron);
  pop();
}
