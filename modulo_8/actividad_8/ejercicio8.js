const readline = require("readline-sync");

const usuario = readline.question("Introduce un número: ");

const num = parseInt(usuario);

function primos(num) {
    if (num === 2 || num === 3) {
        return true;
    } else if (num <= 1 || num % 2 === 0) {
        return false;
    }
    for (let i = 3; i < num; i+= 2) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

const resultado = primos(num);

if (resultado) {
    console.log(`${num} es primo`);
} else {
    console.log(`${num} no es primo`);
}

