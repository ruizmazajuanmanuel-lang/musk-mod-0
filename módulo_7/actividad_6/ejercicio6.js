 
/*Introducimos la constante de readline*/
const readline = require("readline-sync");

/*Declaramos la constante "n" para que el usuario introduzca un número*/

const n = parseInt(readline.question("Introduce el tamaño de la matriz cuadrada: "), 10);

/*declaramos la función para la matriz cuadrada*/

function matrizCuadrada(n) { /*declaramos la constante matriz para que se genere dicha matriz*/
  const matriz = [];
  /*el contador irá contando en cada iteración del bucle para generar el siguiente número siendo "1" el primero*/
  let contador = 1;
  /*iniciamos el bucle for para el bucle externo (i)*/
  for (let i = 0; i < n; i++){ /*declaramos la variable fila para describir todas las filas dependiendo del número n*/
    let fila = [];
    /*declaramos el bucle interno (j) para las filas*/
    for (let j = 0; j < n; j++) {
      /*añadimos con .push cada contador a las filas*/
      fila.push(contador);
      contador++
    } /*añadimos las filas al array matriz*/
    matriz.push(fila);
  } /*La función devuelve la constante matriz*/
  return matriz;
}

/*Declaramos la condicional*/
if (isNaN(n)|| n <= 0) {
  console.log("Por favor, introduzca un número entero positivo");
} else{
  const matriz = matrizCuadrada(n);
  matriz.forEach(fila => console.log(fila));
}