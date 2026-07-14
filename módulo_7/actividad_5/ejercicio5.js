/*Cambiamos el código por uno más completo*/

/*const readline = require("readline-sync");

const usuario = readline.question("Introduce una lista de elementos: ");

let array = usuario.split(",").map (item => item.trim());

function iguales(array) {
  const repetidos= [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !repetidos.includes(array[i])) {
        repetidos.push(array[i]);
      }
    }
  }


  if (repetidos.length > 0) {
    console.log(`Los elementos repetidos son ${repetidos}.`);
  } else {
    console.log("Todos los elementos son únicos");
  }
}

iguales(array);*/

const readline = require("readline-sync");

const usuario = readline.question("Introduce una lista de elementos: ");

let array = usuario.split(",").map(item => item.trim());

function iguales(arr) {
  const contador = {}; // Usamos objeto para contar
  const repetidos = new Set();

  for (const item of arr) {
    if (contador[item]) {
      contador[item]++;
      repetidos.add(item);
    } else {
      contador[item] = 1;
    }
  }
  return [...repetidos];
}

const repetidos = iguales(array);

if (repetidos.length) {
  console.log(`Los elementos repetidos son ${repetidos.join(", ")}.`);
} else {
  console.log("Todos los elementos son únicos");
}
