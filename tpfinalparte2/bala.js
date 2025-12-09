class bala{
    constructor(x, y){
        this.posX = x;
        this.posY = y;
       
        this.vel = 3; 
        this.radio = 30; 
        this.activa = true; 
    }

    dibujar(){
       
        if (this.activa) {
            fill(255, 255, 0); // Color amarillo
            circle(this.posX, this.posY, this.radio);
        }
    }

    mover(){
        if (this.activa) {
            this.posX += 6;
        }
    }


    colision(obj){
        if(this.activa === false) return false;
        if(this.posX > obj.posx) {
            if(this.posX < obj.posx + obj.ancho) {
                if(this.posY > obj.posy) {
                    if(this.posY < obj.posy + obj.alto) {
                        return true;
                    }
                }
            }
        }
        return false;
    }


    reciclar(){
        if(this.posX >= width + 100){
            this.posX = -100;
            this.activa = false;
        }
    }

    desactivar(){
        this.activa = false;
    }

    reactivar(x, y){
        this.posX = x;
        this.posY = y;
        this.activa = true;
    }
}