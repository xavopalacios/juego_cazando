let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function dibujarGato(){
    ctx.fillStyle="gray";
    ctx.fillRect((canvas.width-50)/2,(canvas.height-60)/2,50,60);    
}

function dibujarComida(){
    ctx.fillStyle="red";
    //ctx.fillRect(Math.random()*(canvas.width-20),Math.random()*(canvas.height-20),20,20);    
    ctx.fillRect(0,0,20,20);
}

function iniciarJuego(){
    dibujarGato();
    dibujarComida();
}