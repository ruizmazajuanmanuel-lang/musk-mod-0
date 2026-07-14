const crypto = require('crypto');

function generarArray(tamano) {
    const array = new Array(tamano);
    for (let i = 0; i < tamano; i++) {
        array[i] = crypto.randomInt(0, 100000);
    }
    return array;
}

function quicksort(array) {
    const n = array.length;
    if (n <= 1) {
        return array;
    }
    const pivote = array[n - 1];
    const menores = [];
    const mayores = [];

    for (let i = 0; i < n -1; i++) {
        if(array[i] < pivote) {
            menores.push(array[i]);
        } else {
            mayores.push(array[i]);
        }
    }
    return [...quicksort(menores), pivote, ...quicksort(mayores)];
}

// Ejemplo de uso y medición de tiempo
const arr = generarArray(100000);
console.time("quicksort");
quicksort(arr);
console.timeEnd("quicksort"); 