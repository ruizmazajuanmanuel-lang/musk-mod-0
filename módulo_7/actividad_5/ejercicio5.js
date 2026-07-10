const readline = require("readline-sync");

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

iguales(array);
