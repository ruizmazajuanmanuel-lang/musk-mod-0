const readline = require("readline-sync");

function frecuenciaCaracteres() {
    const usuario = readline.question("Introduce un texto: ");
    const mapaFrecuencia = new Map();

    for (const char of usuario) {
        if (mapaFrecuencia.has(char)) {
            mapaFrecuencia.set(char, mapaFrecuencia.get(char) + 1);
        } else {
            mapaFrecuencia.set(char, 1);
        }
    }

    // Construir una cadena con el resultado en una sola línea
    const resultado = [...mapaFrecuencia.entries()]
        .map(([caracter, frecuencia]) => `'${caracter}' => ${frecuencia}`)
        .join(", ");

    console.log("Mapa de frecuencias: ");
    console.log(`Map: { ${resultado} }`);
}

// Ejecutar la función
frecuenciaCaracteres();

