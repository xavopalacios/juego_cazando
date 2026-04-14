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

function dibujarGato(){
    ctx.fillStyle="gray";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);    
}

function dibujarComida(){
    ctx.fillStyle="red";
    //ctx.fillRect(Math.random()*(canvas.width-20),Math.random()*(canvas.height-20),20,20);    
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

