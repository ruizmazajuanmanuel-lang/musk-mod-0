const readline = require("readline-sync");

// Pedir número al usuario
const usuario = parseInt(readline.question("Introduce un número: "), 10);


function matrizProducto(usuario) {
  const matriz = [];
  for (let i = 0; i < usuario; i++) {
    const fila = [];
    for (let j = 0; j < usuario; j++) {
      fila.push(i * j);
    }
    matriz.push(fila);
  }
  return matriz;
}

const resultado = matrizProducto(usuario);

resultado.forEach(fila => console.log(fila));
