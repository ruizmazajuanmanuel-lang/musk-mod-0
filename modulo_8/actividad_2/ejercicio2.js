const readline = require("readline-sync");

function palabrasDiferentes() {
    const usuarioUno = readline.question("Array 1: ");
    const usuarioDos = readline.question("Array 2: ");

    let arrayUno = String(usuarioUno.split(",").map(item => item.trim()));
    let arrayDos = String(usuarioDos.split(",").map(item => item.trim()));

    const diferencias = [];
    let contador = 0;

    // Elementos en arrayUno que no están en arrayDos
    for (let i = 0; i < arrayUno.length; i++) {
        if (!arrayDos.includes(arrayUno[i])) {
            diferencias.push(arrayUno[i]);
            contador++;
        }
    }

    if (contador > 0) {
        console.log(`La diferencia de ambos conjuntos es: [${diferencias.join(", ")}]`);
    } else {
        console.log("No hay ninguna diferencia");
    }
}

palabrasDiferentes();