const readline = require("readline-sync");

function invertir() {
    const usuario = readline.question("Introduce una palabra: ");
    const pila = [];
    
    for (const invert of usuario) {
        pila.push(invert);
    }

    let palabraInvertida = "";

    while (pila.length > 0) {
        palabraInvertida += pila.pop();
    }

    console.log(`La palabra invertida es: "${palabraInvertida}"`);
} 

invertir();