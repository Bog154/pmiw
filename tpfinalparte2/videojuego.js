//https://youtu.be/qHBxFyyzdLA?si=vI0HGnIUyw6B14MP

class Videojuego {

  constructor() {
    this.piso0 = new plataformas(0, 465, 640);
    this.piso1 = new plataformas(195, 340, 150);
    this.piso2 = new plataformas(440, 340, 150);
    this.piso3 = new plataformas(100, 280, 180);
    this.piso4 = new plataformas(380, 280, 180);
    this.piso5 = new plataformas(200, 220, 150);
    this.pisoMeta = new plataformas(180, 125, 350);

    this.enemigo1 =new enemigo(20, 310, null, 60);
    this.enemigo2 =new enemigo(20, 230, null, 80);
    this.bala =new bala(100, 300);

    this.scooby=new personaje(80, 300, img.scooby);
    this.shaggy = new personaje(120, 362, img.shaggy);

    this.vidaScooby =4;
    this.vidaShaggy =1;
    this.nivelCompletado =false;
    this.juegoTerminado =false;

    this.pantallaPantalla = "inicio";

    this.fotoInicio =null;
    this.fotoVictoria =null;
    this.fotoDerrota =null;
    this.fotoCreditos =null;

    this.sonidoderrota =false;
    this.musicaJuego =null;
    this.sonidoEfectoDerrota =null;
    this.musicaIniciada =false;
  }

  dibujar() {
    if (this.pantallaPantalla ==="inicio") {
      this.dibujarInicio();
      return;
    }

    if (this.pantallaPantalla ==="victoria") {
      this.dibujarVictoria();
      return;
    }

    if (this.pantallaPantalla ==="derrota") {
      this.dibujarDerrotaSimple();
      return;
    }

    if (this.pantallaPantalla==="creditos") {
      this.dibujarCreditos();
      return;
    }

    this.piso0.dibujar();
    this.piso1.dibujar();
    this.piso2.dibujar();
    this.piso3.dibujar();
    this.piso4.dibujar();
    this.piso5.dibujar();

    fill(0, 200, 0);
    this.pisoMeta.dibujar();

    this.scooby.mostrar();
    this.shaggy.mostrar();

    this.enemigo1.dibujar();
    this.enemigo2.dibujar();
    this.bala.dibujar();

    // Mostrar controles
    fill(255);
    textSize(16);
    textAlign(LEFT);
    text("Scooby: Flechas", 10, 20);
    text("Shaggy: A y D", 10, 40);
  }

  dibujarInicio() {
    background(0);

    if (this.fotoInicio) {
      imageMode(CENTER);
      image(this.fotoInicio, width / 2, height / 2, 640, 480);
      imageMode(CORNER);
    }
    
    // Título
    fill(0, 255, 0);
    textAlign(CENTER);
    textSize(50);
    if (fuente) textFont(fuente);
    text("SCOOBY & SHAGGY", width / 2, 150);
    
    fill(255);
    textSize(20);
    text("Aventura en la Mansión", width / 2, 200);

    // Botón Jugar
    let btnX =width / 2 - 75;
    let btnY =300;
    let btnW =150;
    let btnH =50;

    if (mouseX > btnX) {
      if (mouseX < btnX + btnW) {
        if (mouseY > btnY) {
          if (mouseY < btnY + btnH) {
            fill(0, 255, 0);
          } else {
            fill(0, 200, 0);
          }
        } else {
          fill(0, 200, 0);
        }
      } else {
        fill(0, 200, 0);
      }
    } else {
      fill(0, 200, 0);
    }
    rect(btnX, btnY, btnW, btnH, 10);
    
    fill(0);
    textSize(30);
    text("JUGAR", width / 2, btnY + 35);

    ventana.botonJugarRect = { x: btnX, y: btnY, ancho: btnW, alto: btnH };
  }

  dibujarVictoria() {

    fill(0, 0, 0, 200);
    rect(0, 0, width, height);

    if (this.fotoVictoria) {
      imageMode(CENTER);
      image(this.fotoVictoria, width / 2, height / 2, 640, 480);
      imageMode(CORNER);
    }

    fill(0, 255, 0);
    textSize(48);
    textAlign(CENTER);
    if (fuente) textFont(fuente);
    text("¡GANASTE!", width / 2, 80);

    if (mouseX > 165) {
      if (mouseX < 315) {
        if (mouseY > 340) {
          if (mouseY < 380) {
            fill(100, 255, 100);
          } else {
            fill(0, 255, 0);
          }
        } else {
          fill(0, 255, 0);
        }
      } else {
        fill(0, 255, 0);
      }
    } else {
      fill(0, 255, 0);
    }

    rect(165, 340, 150, 40);
    fill(0);
    textSize(20);
    text("REINICIAR", 240, 363);

    if (mouseX > 365) {
      if (mouseX < 515) {
        if (mouseY > 340) {
          if (mouseY < 380) {
            fill(255, 220, 0);
          } else {
            fill(255, 255, 0);
          }
        } else {
          fill(255, 255, 0);
        }
      } else {
        fill(255, 255, 0);
      }
    } else {
      fill(255, 255, 0);
    }

    rect(365, 340, 150, 40);
    fill(0);
    text("CREDITOS", 440, 363);

    ventana.botonReiniciarRect = { x: 165, y: 340, ancho: 150, alto: 40 };
    ventana.botonCreditosRect = { x: 365, y: 340, ancho: 150, alto: 40 };
  }

  dibujarDerrotaSimple() {

    fill(0, 0, 0, 200);
    rect(0, 0, width, height);

    if (this.fotoDerrota) {
      imageMode(CENTER);
      image(this.fotoDerrota, width / 2, height / 2, 640, 480);
      imageMode(CORNER);
    }

    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER);
    if (fuente) textFont(fuente);
    text("¡PERDISTE!", width / 2, 80);

    if (mouseX > 165) {
      if (mouseX < 315) {
        if (mouseY > 340) {
          if (mouseY < 380) {
            fill(255, 100, 100);
          } else {
            fill(255, 0, 0);
          }
        } else {
          fill(255, 0, 0);
        }
      } else {
        fill(255, 0, 0);
      }
    } else {
      fill(255, 0, 0);
    }

    rect(165, 340, 150, 40);
    fill(255);
    textSize(20);
    text("REINTENTAR", 240, 363);

    if (mouseX > 365) {
      if (mouseX < 515) {
        if (mouseY > 340) {
          if (mouseY < 380) {
            fill(255, 220, 0);
          } else {
            fill(255, 255, 0);
          }
        } else {
          fill(255, 255, 0);
        }
      } else {
        fill(255, 255, 0);
      }
    } else {
      fill(255, 255, 0);
    }

    rect(365, 340, 150, 40);
    fill(0);
    text("CREDITOS", 440, 363);

    ventana.botonReintentarRect = { x: 165, y: 340, ancho: 150, alto: 40 };
    ventana.botonCreditosRect = { x: 365, y: 340, ancho: 150, alto: 40 };
  }

  dibujarCreditos() {

    background(0);

    fill(0, 255, 0);
    let blanco = color(255);
    let verde = color(0, 200, 0);
    let verdeOscuro = color(0, 150, 0);

    fill(verde);
    textSize(50);
    textAlign(CENTER);
    text("CRÉDITOS", width / 2, 70);

    stroke(verdeOscuro);
    strokeWeight(3);
    line(100, 105, 540, 105);
    noStroke();

    fill(blanco);
    textSize(22);
    text("Desarrollado por:", width / 2, 160);

    fill(verde);
    textSize(28);
    text("Agustina Moreira, Lucio Perez", width / 2, 200);

    fill(blanco);
    textSize(16);
    text("Juego de plataformas con Scooby y Shaggy", width / 2, 260);
    

    stroke(verdeOscuro);
    strokeWeight(3);
    line(100, 330, 540, 330);
    noStroke();

    fill(blanco);
    textSize(20);
    text("¡Gracias por jugar!", width / 2, 380);

    fill(verde);
    stroke(verdeOscuro);
    strokeWeight(4);
    rect(width / 2 - 150, 410, 300, 55, 12);

    fill(blanco);
    noStroke();
    textSize(22);
    text("VOLVER (ESC)", width / 2, 445);

    colorMode(RGB);
  }

  actualizar() {

    if (this.pantallaPantalla === "victoria") return;
    if (this.pantallaPantalla === "derrota") return;
    if (this.pantallaPantalla === "creditos") return;

    this.scooby.mover("scooby");
    this.shaggy.mover("shaggy");

    this.enemigo1.disparar();
    this.enemigo1.reciclar();
    this.enemigo2.disparar();
    this.enemigo2.reciclar();

    this.bala.mover();
    this.bala.reciclar();

    this.verificarColisiones();
  }

  verificarColisiones() {

    let plataformas = [
      this.piso0, this.piso1, this.piso2,
      this.piso3, this.piso4, this.piso5,
      this.pisoMeta
    ];

    this.scooby.detectarColisionPlataforma(plataformas);
    this.shaggy.detectarColisionPlataforma(plataformas);

    let caida = false;
    if (this.scooby.posy > height) caida =true;
    if (this.shaggy.posy > height) caida =true;

    if (caida) {
      if (this.sonidoderrota === false) {
        this.sonidoEfectoDerrota.play();
        this.sonidoderrota = true;
      }
      this.pantallaPantalla = "derrota";
      return;
    }

    let colisionScooby = false;
    if (this.enemigo1.balas.colision(this.scooby)) colisionScooby =true;
    if (this.enemigo2.balas.colision(this.scooby)) colisionScooby =true;

    if (colisionScooby) {

      if (this.sonidoderrota === false) {
        this.sonidoEfectoDerrota.play();
        this.sonidoderrota = true;
      }
      this.pantallaPantalla = "derrota";
      return;
    }

    let colisionShaggy = false;
    if (this.enemigo1.balas.colision(this.shaggy)) colisionShaggy =true;
    if (this.enemigo2.balas.colision(this.shaggy)) colisionShaggy =true;

    if (colisionShaggy) {

      if (this.sonidoderrota === false) {
        this.sonidoEfectoDerrota.play();
        this.sonidoderrota = true;
      }
      this.pantallaPantalla = "derrota";
      return;
    }

    if (this.scooby.posy < 120) {
      if (this.shaggy.posy < 120) {
        this.nivelCompletado = true;
        this.pantallaPantalla = "victoria";
      }
    }
  }

  controlarMusica() {
 
    if (this.pantallaPantalla === "juego") {
      if (this.musicaJuego) {
        if (this.musicaIniciada === false) {
          this.musicaJuego.loop();
          this.musicaIniciada = true;
        }
      }
    } else {
      
      if (this.musicaJuego) {
        if (this.musicaJuego.isPlaying()) {
          this.musicaJuego.stop();
          this.musicaIniciada = false;
        }
      }
    }
  }

}
