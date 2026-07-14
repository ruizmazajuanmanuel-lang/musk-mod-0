const readline = require("readline-sync");

const radio = readline.question("Introduce el radio: ");

function printcircunsferencia(radio) {
    return 2*Math.PI*radio;
}

const circunsferencia = printcircunsferencia(radio);

function printarea(radio) {
    return Math.PI*radio*radio;
}

const area = printarea(radio);

console.log(`La circunsferencia es ${circunsferencia}`);

console.log(`El área es ${area}`);