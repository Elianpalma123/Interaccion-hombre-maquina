let vida = 120;
let daño = 20;
let defensa = 8;

let vidaPikachu = 100;
let dañoPikachu = 22;
let defensaPikachu = 7;

function atacar() {

    if (vida <= 0 || vidaPikachu <= 0) {
        return;
    }

    let dañoReal = daño - defensaPikachu;
    if (dañoReal < 0) 
    {
        dañoReal = 0;
    }

    vida = vida - (dañoPikachu - defensa);
    vidaPikachu = vidaPikachu - dañoReal;

    console.log("Tu vida: " + vida);
    console.log("Vida de Pikachu: " + vidaPikachu);

    if (vidaPikachu <= 0) 
    {
        console.log("GANASTE contra Pikachu ahora eres un entrenador pokemon");
    } 
    else if (vida <= 0) 
    {
        console.log("Perdiste muy malo (no se puede perder en este juego)");
    }
}