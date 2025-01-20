let imagenes = ["Slot.jpg", "campana.jpg", "cereza.jpeg", "diamond.png"];

let tiempoSlot1 = 100;
let tiempoSlot2 = 100;
let tiempoSlot3 = 100;
let manejaSlot1, manejaSlot2, manejaSlot3;
let slotsEnMovimiento = false;

function cambiarImagen1() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot1").src = imagenes[aleatorio];
    console.log(aleatorio);
}

function cambiarImagen2() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot2").src = imagenes[aleatorio];
    console.log(aleatorio);
}

function cambiarImagen3() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot3").src = imagenes[aleatorio];
    console.log(aleatorio);
}

function tirada() {

    manejaSlot1 = setInterval(cambiarImagen1, tiempoSlot1);
    manejaSlot2 = setInterval(cambiarImagen2, tiempoSlot2);
    manejaSlot3 = setInterval(cambiarImagen3, tiempoSlot3);
    setTimeout(pararSlot, 3000);
}

function pararSlot() {
    clearInterval(manejaSlot1);
    clearInterval(manejaSlot2);
    clearInterval(manejaSlot3);
}