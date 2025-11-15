let videojuego;
let fondo;
let ANCHO = 640;
let ALTO = 480;
let img = {};
let escalera;

class Escalera {
  
  constructor(x, y, ancho = 20, alto = 30) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    fill(0, 0, 255, 80);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  personajePuedeSubir(personaje) {
    // Verifica si el personaje está en la posición correcta para subir la escalera
    return (
      personaje.x + personaje.ancho > this.x &&
      personaje.x < this.x + this.ancho &&
      personaje.y + personaje.alto >= this.y &&
      personaje.y + personaje.alto <= this.y + this.alto
    );
  }
}

class personaje {
  constructor(x, y, imagen, ancho = 50, alto = 50) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.ancho = ancho;
    this.alto = alto;
    this.v = 5;

    // código de salto
    this.vy = 0; // velocidad del eje Y
    this.gravedad = 1; // gravedad por frame
    this.piso = 405; // el piso de los personajes
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  mover(jugador) {
    // movimiento horizontal
    if (jugador === "scooby") {
      if (keyIsDown(LEFT_ARROW)) this.x -= this.v;
      if (keyIsDown(RIGHT_ARROW)) this.x += this.v;
    }

    if (jugador === "shaggy") {
      if (keyIsDown(65)) this.x -= this.v; // A
      if (keyIsDown(68)) this.x += this.v; // D
    }

    // movimiento vertical
    this.y += this.vy;

    if (this.y < this.piso) {
      this.vy += this.gravedad;
    } else {
      this.y = this.piso;
      this.vy = 0;
    }

    // límites
    if (this.x < 0) this.x = 0;
    if (this.x + this.ancho > ANCHO) this.x = ANCHO - this.ancho;
  }

  saltar(jugador) {
    if (this.y === this.piso) {
      if (jugador === "scooby" && keyCode === UP_ARROW) {
        this.vy = -15; // salto Scooby
      }
      if (jugador === "shaggy" && keyCode === 87) {
        this.vy = -15; // salto Shaggy (W)
      }
    }
  }
}

class Videojuego {
  constructor() {
    this.scooby = new personaje(120, 405, img.scooby);
    this.shaggy = new personaje(108, 405, img.shaggy);
    this.enemigo1 = new personaje(500, 395, img.enemigo1);
  }

  actualizar() {
    this.scooby.mover("scooby");
    this.shaggy.mover("shaggy");
  }

  mostrar() {
    this.scooby.mostrar();
    this.shaggy.mostrar();
    this.enemigo1.mostrar();
  }
}

function keyPressed() {
  videojuego.scooby.saltar("scooby");
  videojuego.shaggy.saltar("shaggy");
}

function preload() {
  fondo = loadImage("assets/fondo.jpg");
  img.scooby = loadImage("assets/scoobycaminando.jpg");
  img.shaggy = loadImage("assets/shaggycaminando.jpg");
  img.enemigo1 = loadImage("assets/enemigo.jpg");
}

function setup() {
  createCanvas(ANCHO, ALTO);
  escalera = new Escalera(225, 350, 20, 95);
  videojuego = new Videojuego();
}

function draw() {
  image(fondo, 0, 0, ANCHO, ALTO);

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

  videojuego.actualizar();
  videojuego.mostrar();

  escalera.mostrar();

  // --- Seguimiento del mouse y coordenadas ---
  fill(255, 100, 100);
  noStroke();
  circle(mouseX, mouseY, 20);

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("x: " + mouseX + " y: " + mouseY, 10, 10);
}


