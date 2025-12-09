
let videojuego;  
let fondo;        
let img = {};    
let fuente;      
let sonido;       
let musicaJuego;  
let ventana = {}; 


function preload() {
  
  fondo = loadImage("assets/fondo.png");
  img.scooby = loadImage("assets/scoobycaminando.png");  
  img.shaggy = loadImage("assets/shaggycaminando.png");
  img.enemigo = loadImage("assets/enemigo.jpg");
  img.creditos = loadImage("assets/creditos.png");
  sonido = loadSound("assets/sonidoderrota.mp3");
  musicaJuego = loadSound("assets/sonidojuego.mp3");  


  img.inicio = loadImage("assets/iniciogame.png");
  img.victoria = loadImage("assets/victoria.png");
  img.derrota = loadImage("assets/derrota.png");

  
  fuente = loadFont("assets/Creepster/Creepster-Regular.ttf");
}


function setup() {
  createCanvas(640, 480);
  background(200);

 
  getAudioContext().resume();

  musicaJuego.setLoop(true);

 
  videojuego = new Videojuego(img);

  
  videojuego.enemigo1.setImagen(img.enemigo);
  videojuego.enemigo2.setImagen(img.enemigo);

 
  videojuego.fotoInicio = img.inicio;
  videojuego.fotoVictoria = img.victoria;
  videojuego.fotoDerrota = img.derrota;
  videojuego.fotoCreditos = img.creditos;
  console.log("creditos cargada:", videojuego.fotoCreditos);

 
  videojuego.musicaJuego = musicaJuego;
  videojuego.sonidoEfectoDerrota = sonido;


 
  if (fuente) textFont(fuente);
}


function draw() {
  background(200);

  if (videojuego.pantallaPantalla === "juego") {
    imageMode(CORNER);
    image(fondo, 0, 0);
  }

  videojuego.dibujar();
  videojuego.actualizar();
  videojuego.controlarMusica();
}


function keyPressed() {
  if (videojuego.pantallaPantalla === "creditos") {
    if (keyCode === ESCAPE || key === " ") {
      if (videojuego.nivelCompletado) videojuego.pantallaPantalla = "victoria";
      else videojuego.pantallaPantalla = "derrota";
    }
    return;
  }

  if (videojuego.pantallaPantalla === "victoria" || videojuego.pantallaPantalla === "derrota") {
    if (keyCode === ESCAPE || key === " ") location.reload();
    return;
  }

  videojuego.scooby.mover("scooby");
  videojuego.shaggy.mover("shaggy");
  videojuego.scooby.saltar("scooby");
  videojuego.shaggy.saltar("shaggy");
}


function mousePressed() {
  
  if (videojuego === undefined) return;

  // INICIO
  if (videojuego.pantallaPantalla === "inicio") {
    if (ventana.botonJugarRect) {
      let boton = ventana.botonJugarRect;
      if (mouseX > boton.x) {
        if (mouseX < boton.x + boton.ancho) {
          if (mouseY > boton.y) {
            if (mouseY < boton.y + boton.alto) {
              videojuego.pantallaPantalla = "juego";
              if (getAudioContext().state === 'suspended') {
                getAudioContext().resume();
              }
            }
          }
        }
      }
    }
  }

  // VICTORIA
  if (videojuego.pantallaPantalla === "victoria") {
    if (ventana.botonReiniciarRect) {
      let boton = ventana.botonReiniciarRect;
      if (mouseX > boton.x) {
        if (mouseX < boton.x + boton.ancho) {
          if (mouseY > boton.y) {
            if (mouseY < boton.y + boton.alto) {
              location.reload();
            }
          }
        }
      }
    }
    if (ventana.botonCreditosRect) {
      let boton = ventana.botonCreditosRect;
      if (mouseX > boton.x) {
        if (mouseX < boton.x + boton.ancho) {
          if (mouseY > boton.y) {
            if (mouseY < boton.y + boton.alto) {
              videojuego.pantallaPantalla = "creditos";
            }
          }
        }
      }
    }
  }

  // DERROTA
  if (videojuego.pantallaPantalla === "derrota") {
    if (ventana.botonReintentarRect) {
      let boton = ventana.botonReintentarRect;
      if (mouseX > boton.x) {
        if (mouseX < boton.x + boton.ancho) {
          if (mouseY > boton.y) {
            if (mouseY < boton.y + boton.alto) {
              location.reload();
            }
          }
        }
      }
    }
    if (ventana.botonCreditosRect) {
      let boton = ventana.botonCreditosRect;
      if (mouseX > boton.x) {
        if (mouseX < boton.x + boton.ancho) {
          if (mouseY > boton.y) {
            if (mouseY < boton.y + boton.alto) {
              videojuego.pantallaPantalla = "creditos";
            }
          }
        }
      }
    }
  }
}
