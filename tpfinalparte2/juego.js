let videojuego;
let fondo;
let img = {};
let escalera;

function preload() {
  fondo = loadImage("assets/fondo.jpg");
  img.scooby = loadImage("assets/scoobycaminando.jpg");
  img.shaggy = loadImage("assets/shaggycaminando.jpg");
  img.enemigo = loadImage("assets/enemigo.jpg");
}

function setup() {
  createCanvas(640, 480);
  escalera = new Escalera(225, 350, 20, 95);
  videojuego = new Videojuego();
}

function draw() {
  image(fondo, 0, 0);

  // Escalera Scooby
  if (escalera.personajePuedeSubir(videojuego.scooby)) {
    if (keyIsDown(UP_ARROW)) videojuego.scooby.y -= 3; // subir
    if (keyIsDown(DOWN_ARROW)) videojuego.scooby.y += 3; // bajar
  }

  // Escalera Shaggy
  if (escalera.personajePuedeSubir(videojuego.shaggy)) {
    if (keyIsDown(87)) videojuego.shaggy.y -= 3; // W
    if (keyIsDown(83)) videojuego.shaggy.y += 3; // S
  }

  videojuego.dibujar();
  videojuego.actualizar();

  escalera.dibujar();

  // --- Seguimiento del mouse y coordenadas ---
  fill(255, 100, 100);
  noStroke();
  circle(mouseX, mouseY, 20);

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("x: " + mouseX + " y: " + mouseY, 10, 10);
}

function keyPressed() {
  videojuego.scooby.saltar("scooby");
  videojuego.shaggy.saltar("shaggy");
}