class Escalera {
  
  constructor(x, y, ancho = 20, alto = 30) {
    this.posx = x;
    this.posy = y;
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