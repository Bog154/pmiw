class Videojuego {

  constructor() {
    this.scooby = new personaje(120, 405, img.scooby);
    this.shaggy = new personaje(108, 405, img.shaggy);
    
  }

  dibujar() {
    this.scooby.mostrar();
    this.shaggy.mostrar();
  }

  actualizar() {
    this.scooby.mover("scooby");
    this.shaggy.mover("shaggy");
  }

  crearEnemigos(){

  }

  gano(){

  }

  perdio(){

  }

}