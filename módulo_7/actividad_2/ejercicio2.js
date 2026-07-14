const readline = require("readline-sync");

const radio = readline.question("introduce el radio: ");

function imprimirarea(radio) {
    return Math.PI*radio*radio;
}

const area = imprimirarea(radio);

console.log(`El área de la circunsferencia es ${area}`);