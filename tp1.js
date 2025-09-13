// https://youtu.be/KINnnrelrKE
let ilusion
let c1, c2, c3;
let cant = 15;
let tam = 61;

function preload(){
 ilusion = loadImage("assets/op2.jpeg");
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);

  c1 = color(0, 100, 0); //negro
  c2 = color(1, 0, 100); //blanco
  c3 = color(55); //gris
}

function draw() {
  if (mouseCamColor()){
    c1 = color(1, 0, 100); //de negro a blanco
    c2 = color(0, 100, 0); //de blanco a negro
  } else {
    c1 = color(0, 100, 0); //de blanco a negro
    c2 = color(1, 0, 100); //de negro a blanco
  }

  image(ilusion, 0, 0);

  push();
  translate(-18, -9);
  grilla(7, 0);
  pop();
}

function mousePressed(){
  camColor();
}

function keyPressed(){
  reiniciar();
}