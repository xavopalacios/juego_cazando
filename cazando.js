let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function dibujarGato(){
    ctx.fillStyle="gray";
    ctx.fillRect((canvas.width-50)/2,(canvas.height-60)/2,50,60);    
}