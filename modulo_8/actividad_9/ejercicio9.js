const readline = require('readline-sync');

// Leer texto desde consola
const usuario = readline.question("Introduce un texto: ");

function parentesisBalanceados(usuario) {
    const text = [];

    for (let cadena of usuario) {
        if (cadena === '(') {
            text.push(cadena);
        } else if (cadena === ')') {
            if (text.length === 0) {
                return false;
            }
            text.pop();
        }
    }

    return text.length === 0;
}

if (parentesisBalanceados(usuario)) {
    console.log("Están balanceados");
} else {
    console.log("No están balanceados");
}
