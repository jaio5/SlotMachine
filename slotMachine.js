
let imagenes = ["Slot.jpg", "cereza.jpeg", "diamond.png", "campana.jpg"];

let tiempoSlot1=100;
let manejaSlot1;


function cambiarImagen() {
    let aleatorio = parseInt(Math.random()*imagenes.length);
    document.getElementById("slot1").src = imagenes[aleatorio];
    console.log(aleatorio);

}

function tirada() {
    manejaSlot1 = setInterval(cambiarImagen, tiempoSlot1);
    setTimeout(reducirtiempo, 3000);
}

function reducirtiempo(){
    tiempoSlot1 += 500;
    clearInterval(manejaSlot1);
    manejaSlot1 = setInterval(cambiarImagen, tiempoSlot1);
    setTimeout(pararSlot1, 2000);
}
function pararSlot1() {
    clearInterval(manejaSlot1);
}

tirada();

