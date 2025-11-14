let videojuego;
let fondo;
let ANCHO = 640;
let ALTO = 480;
let img = {};

class personaje {
  constructor(x, y, imagen, ancho = 50, alto = 50) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.ancho = ancho;
    this.alto = alto;
    this.v = 5;

    // salto
    this.vy = 0;
    this.gravedad = 1;
    this.piso = 405;
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
      if (jugador==="scooby" && keyCode === UP_ARROW) {
        this.vy = -10;
      }
      if (jugador==="shaggy" && keyCode === 87) { // 87= W
        this.vy= -10;
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
  videojuego = new Videojuego();
}

function draw() {
  image(fondo, 0, 0, ANCHO, ALTO);
  videojuego.actualizar();
  videojuego.mostrar();
}