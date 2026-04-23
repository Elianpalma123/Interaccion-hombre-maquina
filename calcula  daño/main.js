let vida = 120;
let daño = 20;
let defensa = 8;

let vidaPikachu = 100;
let dañoPikachu = 22;
let defensaPikachu = 7;

function atacar() {

    if (vida <= 0 || vidaPikachu <= 0) return;

    let dañoReal = daño - defensaPikachu;
    if (dañoReal < 0) dañoReal = 0;

    let dañoRecibido = dañoPikachu - defensa;
    if (dañoRecibido < 0) dañoRecibido = 0;

    vida -= dañoRecibido;
    vidaPikachu -= dañoReal;

    actualizar();
}

function Puño() {

    if (vida <= 0 || vidaPikachu <= 0) return;

    let dañoPuño = 16; 

    let dañoReal = dañoPuño - defensaPikachu;
    if (dañoReal < 0) dañoReal = 0;

    let dañoRecibido = dañoPikachu - defensa;
    if (dañoRecibido < 0) dañoRecibido = 0;

    vida -= dañoRecibido;
    vidaPikachu -= dañoReal;

    actualizar();
}
function canto() {

    if (vida <= 0 || vidaPikachu <= 0) return;

    let dañoCanto = 8; 

    let dañoReal = dañoCanto - defensaPikachu;
    if (dañoReal < 0) dañoReal = 0;

    let dañoRecibido = dañoPikachu - defensa;
    if (dañoRecibido < 0) dañoRecibido = 0;

    vida -= dañoRecibido;
    vidaPikachu -= dañoReal;

    actualizar();
}

function actualizar() {
    document.getElementById("vidaJugador").innerText = "Tu vida: " + vida;
    document.getElementById("vidaPikachu").innerText = "Vida Pikachu: " + vidaPikachu;

    document.getElementById("barraVida").value = vida;
    document.getElementById("barraPikachu").value = vidaPikachu;

    if (vidaPikachu <= 0) {
        alert("Ganaste");
    } else if (vida <= 0) {
        alert("Perdiste, ¿Querias ganar cantandole o que?");
    }


}