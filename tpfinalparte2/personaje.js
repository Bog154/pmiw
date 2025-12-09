class personaje {

  constructor(x, y, imagen) {
    // POSICIÓN Y TAMAÑO
    this.posx = x;
    this.posy = y;
    this.ancho = 40; 
    this.alto = 58;
    this.imagen = imagen;
    this.vel = 5;
    this.vely = 0; 
    this.gravedad = 1; 
    this.piso = 435;
    this.estaParado = false; 
    this.vive = true; 
  }

  mostrar() {
    
    image(this.imagen, this.posx, this.posy);
  }

  mover(personaje) {
    
    if (personaje === "scooby") {
   
      if (keyIsDown(LEFT_ARROW)) {
        this.posx -= this.vel;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.posx += this.vel;
      }
      
      if (keyIsDown(DOWN_ARROW)) {
        this.estaParado = false;
      }
    }

    if (personaje === "shaggy") {
    
      if (keyIsDown(65)) { // A
        this.posx -= this.vel;
      }
      if (keyIsDown(68)) { // D
        this.posx += this.vel;
      }
     
      if (keyIsDown(83)) { // S
        this.estaParado = false;
      }
    }

    
    if(this.estaParado){
      
      this.vely = 0;
    } else {
      this.posy += this.vely;
      this.vely += this.gravedad;
    }
    

    // límites
    if (this.posx < 20) {
      this.posx = 20;
    }
    if (this.posx > 590) {
      this.posx = 600;
    }
    if (this.posy > this.piso){
      this.posy = this.piso;
    }
  }

  saltar(jugador) {
    if (this.estaParado) {
      if (jugador === "scooby") {
        if (keyCode === UP_ARROW) {
          this.vely = -15; // salto Scooby
          this.estaParado = false;
        }
      }
      if (jugador === "shaggy") {
        if (keyCode === 87) {
          this.vely = -15; // salto Shaggy (W)
          this.estaParado = false;
        }
      }
    }
  }

  detectarColisionPlataforma(plataformas) {
    if (this.vely >= 0) {
   for (let plataforma of plataformas) {
   if (this.posy + this.alto >= plataforma.posY) {
   if (this.posy + this.alto <= plataforma.posY + 30) { 
     if (this.posx + 20 > plataforma.posX) {
      if (this.posx < plataforma.posX + plataforma.ancho) {
           this.posy = plataforma.posY - this.alto;
            this.vely = 0;
            this.estaParado = true;
             return true;
            }
           }
          }
        }
      }
    }
    return false;
  }

  
  fueGolpeadoPor(bala) {
    if (this.posx < bala.posX + 30) {
      if (this.posx + 30 > bala.posX) {
        if (this.posy < bala.posY + 30) {
          if (this.posy + this.alto > bala.posY) {
            return true;
          }
        }
      }
    }
    return false;
  }

}