class plataformas{
    constructor(x, y, a){
        // POSICIÓN
        this.posX = x;
        this.posY = y;
        
        // TAMAÑO
        this.ancho = a;  
        this.alto = 20;  
    }

    dibujar(){
        
        fill(255, 99, 99);
        rect(this.posX, this.posY, this.ancho, this.alto);
    }

    
    contacto(personaje) {
        
        let dentroEnX = false;
        if (personaje.posx + 20 > this.posX) {
            if (personaje.posx < this.posX + this.ancho) {
                dentroEnX = true;
            }
        }
        
        
        let conContactoY = false;
        if (personaje.posy + personaje.alto >= this.posY) {
            if (personaje.posy + personaje.alto <= this.posY + this.alto + 10) {
                conContactoY = true;
            }
        }
        
       
        if (dentroEnX) {
            if (conContactoY) {
                return true;
            }
        }
        return false;
    }
}