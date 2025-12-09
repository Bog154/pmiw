class enemigo {
    constructor(x, y, imagen = null, intervaloDisparo = 60) {
        this.posX = x;
        this.posY = y;
        this.ancho = 30;
        this.alto = 50;
        
        
        this.imagen = imagen; 
        
       
        this.balas = new bala(); 
        
        
        this.intervaloDisparo = intervaloDisparo; 
        this.tiempoUltimoDisparo = 0; 
    }

    dibujar(){
        
        if (this.imagen) {
            image(this.imagen, this.posX, this.posY, this.ancho, this.alto);
        } else {
            fill(150, 15, 75);
            rect(this.posX, this.posY, this.ancho, this.alto);
        }
        this.balas.dibujar();
    }

    disparar(){
    
     if (frameCount - this.tiempoUltimoDisparo >= this.intervaloDisparo) {
            
            this.balas.reactivar(this.posX + this.ancho, this.posY + this.alto / 2);
            this.tiempoUltimoDisparo = frameCount; 
        }
        
        this.balas.mover();
    }

    reciclar(){
        this.balas.reciclar();
    }
    setIntervaloDisparo(nuevoIntervalo) {
        this.intervaloDisparo = nuevoIntervalo;
    }
    setImagen(nuevaImagen) {
        this.imagen = nuevaImagen;
    }
}