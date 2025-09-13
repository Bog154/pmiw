function mouseCamColor(){
    return mouseX > width/2;
}

function grilla(ancho, alto){
    for (let x = ancho; x < cant; x++){
        for (let y = alto; y < cant; y++){
            stroke(c3);
            strokeWeight(14);
            fill(c1);
            rect(x*tam, y*tam, tam, tam);
            noStroke();
            fill(c2);
            circle(x*tam, y*tam, 21);
        }
    }
}

function camColor(){
    c3 = color(random(360), random(100), random(100));
}

function reiniciar(){
    if (key == " "){
        c1 = color(0, 100, 0);
        c2 = color(1, 0, 100);
        c3 = color(55);
        mouseX = 0;
    }
}