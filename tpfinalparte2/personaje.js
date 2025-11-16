class personaje {

  constructor( imagen) {
    this.posx = 50;
    this.posy = 470;
    this.imagen = imagen;
    this.vel = 5;
    this.vive;

    // código de salto
    this.vely = 0; // velocidad del eje Y
    this.gravedad = 1; // gravedad por frame
    this.piso = 405; // el piso de los personajes
  }

  mostrar() {
    image(this.imagen, this.posx, this.y);
    if (jugador = "scooby") {
      image(img.scooby);
    }
  }

  mover(jugador) {
    // movimiento horizontal
    if (jugador === "scooby") {
      if (keyIsDown(LEFT_ARROW)) this.posx -= this.vel;
      if (keyIsDown(RIGHT_ARROW)) this.posx += this.vel;
    }

    if (jugador === "shaggy") {
      if (keyIsDown(65)) this.posx -= this.vel; // A
      if (keyIsDown(68)) this.posx += this.vel; // D
    }

    // movimiento vertical
    this.y += this.vely;

    if (this.y < this.piso) {
      this.vely += this.gravedad;
    } else {
      this.y = this.piso;
      this.vely = 0;
    }

    // límites
    if (this.posx < 0) this.posx = 0;
    if (this.posx + this.ancho > ANCHO) this.posx = ANCHO - this.ancho;
  }

  saltar(jugador) {
    if (this.y === this.piso) {
      if (jugador === "scooby" && keyCode === UP_ARROW) {
        this.vely = -10; // salto Scooby
      }
      if (jugador === "shaggy" && keyCode === 87) {
        this.vely = -10; // salto Shaggy (W)
      }
    }
  }
  
}