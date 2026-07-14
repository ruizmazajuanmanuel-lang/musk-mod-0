
/*Abrimos la librería readline*/
const readline = require("readline-sync");

/*Pedimos al usuario el número de filas y columnas que quiere que tenga*/
const filas = parseInt(readline.question("Número de filas: "), 10);
const columnas = parseInt(readline.question("Número de columnas: "), 10);

/*Declaramos la matriz de entrada como una matriz vacía*/

const matriz = [];

/*Declaramos la función matriz traspuesta en base a la constante matriz*/
function matrizTraspuesta(matriz) { /*Devuelve la matriz y colIndex describe la posición de la fila*/
  return matriz[0].map((_, colIndex) => matriz.map(fila => fila[colIndex]));
}

/*Iniciamos el bucle for para las filas*/
for (let i = 0; i < filas; i++) { /*Hacemos que la consola nos pida el array de la fila de forma que nos vaya pidiendo todas y cada uno de los valores de las filas*/
  const fila = readline.question(`Fila ${i + 1}: `)
    .split(" ") /*Separa el string con espacios*/
    .map(Number); /*Convierte cada palabra del string en un número*/
  matriz.push(fila); /*Añade la fila a la matriz*/
}

const traspuesta = matrizTraspuesta(matriz);

console.log("Matriz de entrada:");
matriz.forEach(fila => console.log(fila));
console.log("Matriz salida:");
traspuesta.forEach(fila => console.log(fila));

