/*declaramos la constante readline para que el usuario introduzca el texto*/
const readline = require("readline-sync");
/*declaramos text para el texto a introducir*/
const text = readline.question("Introduce un texto: ");

/*declaramos la función para convertir el texto en matriz*/
function textoAMatriz(texto) {
    /*convertimos el string en array*/
    const string = texto.split(" ");
    /*Declaramos el ancho que queremos que tengan todos los arrays de la matriz*/
    const ancho = 5;
    /*declaramos la matriz que queremos crear*/
    const matriz = [];
    /*declaramos todas y cada una de las filas de la matriz*/
    let fila = [];

    /*Iniciamos el bucle for... of para convertir "string" en "palabra"*/
    for (const palabra of string) {
        /*con fila.push(palabra) introducimos una palabra en dicha fila*/
        fila.push(palabra);
        /*si la longitud de la fila es igual al ancho, añade una siguiente fila a la matriz*/
        if (fila.length === ancho) {
            matriz.push(fila);
            fila = [];
        }
    }
/*si la longitud de la fila es mayor que 0 añade dicha fila a la matriz*/
    if (fila.length > 0) {

        matriz.push(fila);
    }
/*al finalizar el bucle devuelve la constante matriz*/
    return matriz;
}
/*declaramos la constante del resultado el cual será igual a la función*/
const resultado = textoAMatriz(text);

console.log(resultado);


