const readline = require("readline-sync");

function encontrarPalabrasRepetidas() {
    // Pedir texto al usuario
    const usuario = readline.question("Introduce un texto: ");

    // Dividir texto en palabras separadas por espacios
    const palabras = usuario.split(" ");
    
    //Creamos la variable resultado que por ahora estará vacía
    let resultado = "";

    //Con new Set() podremos agregar palabras que no se encuentren repetidas, de forma que no repetiremos en el resultado las palabras ya repetidas
    const palabrasAgregadas = new Set();

    // inicio del bucle
    //bucle externo
    for (let i = 0; i < palabras.length; i++) {
        const palabraActual = palabras[i];
        // Ignorar palabras vacías o ya procesadas
        if (palabraActual === "" || palabrasAgregadas.has(palabraActual)) {
            continue;
        }

        let contador = 0;
        //Iniciamos el bucle interno con j
        // Contar cuántas veces aparece la palabra actual
        for (let j = 0; j < palabras.length; j++) {
            if (palabraActual === palabras[j]) {
                contador++;
            }
        }

        // Si la palabra se repite, añadirla al resultado y marcarla como procesada
        if (contador > 1) {
            resultado += palabraActual + ", ";
            palabrasAgregadas.add(palabraActual);
        }
    }

    // Mostrar resultado
    if (resultado.length > 0) {
        console.log("Se repiten las siguientes palabras: " + resultado);
    } else {
        console.log("No se encontraron palabras repetidas.");
    }
}

// Llamar a la función para ejecutar el programa
encontrarPalabrasRepetidas();
