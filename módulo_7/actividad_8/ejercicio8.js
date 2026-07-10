const readline = require("readline-sync");

const text = readline.question("Introduce un texto: ");

function palindromo (text) {
    const palabras = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverse = palabras.split("").reverse().join("");

    if (reverse == palabras) {
        console.log("El texto es un palíndromo");
    } else {
        console.log("El texto no es un palíndromo")
    }
}

palindromo(text);
