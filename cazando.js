let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

const ALTO_GATO=60;
const ANCHO_GATO=50;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;



function iniciarJuego(){
    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;
    comidaX=(ANCHO_COMIDA);
    comidaY=(ALTO_COMIDA);

    dibujarGato();
    dibujarComida();
}

function actualizarPantalla(){
    limpiarCanvas();
    dibujarGato();
    dibujarComida();
}
 function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
}

function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY=gatoY+10;
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
