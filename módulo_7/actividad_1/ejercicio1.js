const readline = require("readline-sync");

const radio = parseInt(readline.question("introduce el radio: "));


function imprimircircunsferencia(radio) {
    return 2*Math.PI*radio;
}
const circunsferencia = imprimircircunsferencia(radio);
    console.log(`La circunsferencia mide ${circunsferencia}`);

    /*Aquí haremos un cambio*/