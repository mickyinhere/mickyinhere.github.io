let octahedron;

function preload() {
  octahedron = loadModel('https://mickyinhere.github.io/p53dmodel/sdemodel.obj');
}

function setup() {
  createCanvas(1500, 1000, WEBGL);
}


function draw() {
  clear();
  //background(0);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  

  push();
  rotateX(PI*0.3);
  rotateZ(frameCount * 0.00101);
  //rotateY(frameCount * 0.00101);
  specularMaterial(250,250,250,10);
  stroke(255);
  strokeWeight(0.05);
  scale(0.05);
  model(octahedron);
  pop();
}


