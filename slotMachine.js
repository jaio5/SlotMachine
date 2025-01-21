let imagenes = ["Slot.jpg", "campana.jpg", "cereza.jpeg", "diamond.png"];

let tiempoSlot1 = 100;
let tiempoSlot2 = 100;
let tiempoSlot3 = 100;
let manejaSlot1, manejaSlot2, manejaSlot3;
let slotsEnMovimiento = false;
let monedas = 10;

function actualizarMonedas() {
    document.getElementById("recuentoMonedas").innerText = `Monedas: ${monedas}`;
}

function cambiarImagen1() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot1").src = imagenes[aleatorio];
   
}

function cambiarImagen2() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot2").src = imagenes[aleatorio];
    
}

function cambiarImagen3() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot3").src = imagenes[aleatorio];
    
}

function tirada() {
    if (slotsEnMovimiento) return; // Evita que se vuelva a tirar si los slots están en movimiento
    if (monedas <= 0) {
        document.getElementById("mensajeVictoria").innerHTML=("No tienes suficientes monedas para jugar.");
        return;
    }
    monedas--; // Resta una moneda por tirada
    actualizarMonedas();
    slotsEnMovimiento = true;

    let slotSound = document.getElementById("slotSound");
    slotSound.currentTime = 0; 
    slotSound.play(); 

    manejaSlot1 = setInterval(cambiarImagen1, tiempoSlot1);
    manejaSlot2 = setInterval(cambiarImagen2, tiempoSlot2);
    manejaSlot3 = setInterval(cambiarImagen3, tiempoSlot3);
    setTimeout(pararSlot, 3000);
}

function pararSlot() {
    clearInterval(manejaSlot1);
    clearInterval(manejaSlot2);
    clearInterval(manejaSlot3);
    slotsEnMovimiento = false; // Permite volver a tirar

    let slotSound = document.getElementById("slotSound");
    slotSound.pause(); 
    slotSound.currentTime = 0;

    verificarGanador();
}

function verificarGanador() {
    let slot1 = document.getElementById("slot1").src;
    let slot2 = document.getElementById("slot2").src;
    let slot3 = document.getElementById("slot3").src;   
    if (slot1 === slot2 && slot2 === slot3) {
        let mensaje = "Has ganado! ";
        let premio = 0;
        if (imagenes[0])
        {
            premio = 5;
        }else if (imagenes[1])
        {
            premio = 10;
        }else if(imagenes[2])
        {
            premio = 50;
        }else if(imagenes[3])
        {
            premio = 100;
        }
        console.log(monedas);
        monedas += premio;
        actualizarMonedas();
        console.log(monedas);
        mensaje += `Has ganado ${premio} monedas.`;
        document.getElementById("mensajeVictoria").innerHTML = mensaje;
    } else {
        document.getElementById("mensajeVictoria").innerHTML = "Suerte la próxima vez";
    }
    
}
function tarjetazo()
{
    let textareaValue = document.getElementById("tarjeta").value;
    monedas += parseInt(textareaValue,10);
    console.log(monedas);
    actualizarMonedas();
}