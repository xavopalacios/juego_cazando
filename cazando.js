let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

let puntaje=0;
let tiempo=15;
let idIntervaloTiempo;

const ALTO_GATO=60;
const ANCHO_GATO=50;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

const velocidadGato=25;
let cronometo=1000;
const maxPuntaje=6;

let masTiempo=15;
let mastiempoX=canvas.width-ANCHO_COMIDA;
let mastiempoY=canvas.height-ALTO_COMIDA;

function iniciarJuego(){
    idIntervaloTiempo =setInterval(restarTiempo,cronometo);
    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;
    comidaX=(ANCHO_COMIDA);
    comidaY=(ALTO_COMIDA);

    dibujarGato();
    dibujarComida();
    
}

function reiniciarJuego(){
    limpiarCanvas();
    clearInterval(idIntervaloTiempo);
    tiempo=15;
    puntaje=0;
    mostrarEnSpan("tiempo",tiempo);
    mostrarEnSpan("puntos",puntaje);
    mostrarEnSpan("mensaje","");
    iniciarJuego();
}  

function actualizarPantalla(){
    envolverGato();
    detectarColision();
    limpiarCanvas();
    dibujarGato();
    dibujarComida();
}

 function moverIzquierda(){
    gatoX=gatoX-velocidadGato;
    actualizarPantalla();}

function moverDerecha(){
    gatoX=gatoX+velocidadGato;
    actualizarPantalla();
}

function moverArriba(){
    gatoY=gatoY-velocidadGato;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY=gatoY+velocidadGato;
    actualizarPantalla();
}


function dibujarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function dibujarGato(){
    dibujarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"gray");
   
}

function dibujarComida(){
    dibujarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"red"); 
}



function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX && comidaX<gatoX+ANCHO_GATO && comidaY+ALTO_COMIDA>gatoY && comidaY<gatoY+ALTO_GATO){
     aparecerComida(); 
     puntaje=puntaje+1;    
     mostrarEnSpan("puntos",puntaje);
     
}}




function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
}



function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo);
    detectarFinJuego();
    
}

function detectarFinJuego(){
    let varMensaje="";
    if(tiempo>0 && puntaje>=maxPuntaje){
        varMensaje="Ganador";
        clearInterval(idIntervaloTiempo);

        alert(varMensaje);
        mostrarEnSpan("mensaje",varMensaje);

    } else if(tiempo<=0){
        varMensaje="Perdedor";
         mostrarEnSpan("mensaje",varMensaje);
        clearInterval(idIntervaloTiempo);
        alert(varMensaje);
        
        }   
}

 function envolverGato() {
    if (gatoX > canvas.width) {
        gatoX = 0;
    } 
    else if (gatoX < 0) {
        gatoX = canvas.width;
    }

    if (gatoY > canvas.height) {
        gatoY = 0;
    } 
    else if (gatoY < 0) {
        gatoY  = canvas.height;
    }
}

  