const crypto = require('crypto');

function generarArray(tamano) {
    const array = new Array(tamano);
    for (let i = 0; i < tamano; i++) {
        array[i] = crypto.randomInt(0, 100000);
    }
    return array;
}

function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Ejemplo de uso y medición de tiempo
const arr = generarArray(100000);
console.time("bubbleSort");
bubbleSort(arr);
console.timeEnd("bubbleSort");
