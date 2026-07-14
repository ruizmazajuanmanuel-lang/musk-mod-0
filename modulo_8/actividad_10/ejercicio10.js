const readline = require('readline-sync');

// Leer texto desde consola
const usuario = readline.question("Introduce un texto: ");

function caracteresCorrectos(usuario) {
    const text = [];

    for (let cadena of usuario) {
        if ((cadena === '(') || (cadena === '[') || (cadena === '{')) {
            text.push(cadena);
        } else if ((cadena === ')') || (cadena === ']') || (cadena === '}')) {
            if (text.length === 0) {
                return false;
            }
            const last = text.pop();

            if (
                (cadena === ')' && last !== '(') ||
                (cadena === ']' && last !== '[') ||
                (cadena === '}' && last !== '{')
            ) {
                return false;
            }
        }
    }

    return text.length === 0;
}


if (caracteresCorrectos(usuario)) {
    console.log("Secuencia correcta.");
} else {
    console.log("Secuencia incorrecta.");
}