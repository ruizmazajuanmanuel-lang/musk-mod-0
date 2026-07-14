const readline = require("readline-sync");

function sonAnagramas() {
    const palUno = readline.question("Introduce una palabra: ").toLowerCase().replace(/\s+/g, "");
    const palDos = readline.question("Introduce otra palabra: ").toLowerCase().replace(/\s+/g, "");

    // Función para contar frecuencia de caracteres usando Map
    function contarFrecuencia(pal) {
        const mapa = new Map();
        for (const char of pal) {
            mapa.set(char, (mapa.get(char) || 0) + 1);
        }
        return mapa;
    }

    const mapa1 = contarFrecuencia(palUno);
    const mapa2 = contarFrecuencia(palDos);

    // Comparar mapas
    if (mapa1.size !== mapa2.size) {
        console.log("No son anagramas.");
        return;
    }

    for (const [char, count] of mapa1) {
        if (mapa2.get(char) !== count) {
            console.log("No son anagramas.");
            return;
        }
    }

    console.log("Son anagramas.");
}

// Ejecutar la función
sonAnagramas();
