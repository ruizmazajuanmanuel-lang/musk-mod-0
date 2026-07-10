const readline = require("readline-sync");

const usuario = readline.question("Introduce una lista de números: ");

let array = usuario.split(",");

let suma = 0;

function sumar (suma, array){
    for (let i = 0; i < array.length; i++) {
    suma += Number(array[i]);
    }
    return suma;
}

let media = sumar(suma, array) / array.length;

console.log("La suma:", sumar(suma, array));
console.log("La media aritmética es:", media);

