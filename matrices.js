let matriz5por5 = [
[1, 2, 3, 45, 5],
[5, 8, 6, 3, 1],
[8, 9, 10, 14, 555],
[0, 25, 75, 8, 65],
[19, 87, 45, 30, 29],
];
function sumarTodaMatriz(arr) {
let res = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    res += arr[i][j];
    }
}
return res;
}
console.log(sumarTodaMatriz(matriz5por5));

const matrixBuilder = () => {
let res = [];
for (let i = 0; i <= 90; i += 10) {
    let aux = [];
    for (let j = 1; j <= 10; j++) {
    if (i === 0) {
        aux.push(j);
    } else {
        aux.push(i + j);
    }
    }
    res.push(aux);
}
return res;
};
console.log(matrixBuilder());

let matrizDe10 = matrixBuilder();

function sumaAscendente(matriz) {
let sumatoria = 0;
for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][i];
}
return sumatoria;
}
console.log(sumaAscendente(matrizDe10));

function sumaDescendente(matriz) {
let sumatoria = 0;
for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][matriz.length - (1 + i)];
}
return sumatoria;
}
console.log(sumaDescendente(matrizDe10));


function diagonalRoja(matriz) {
let sumatoria = 0;
for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][i];
}
return sumatoria;
}
console.log(diagonalRoja(matrizDe10));


function diagonalVerde(matriz) {
let sumatoria = 0;
for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][matriz.length - (1 + i)];
}
return sumatoria;
}
console.log(diagonalVerde(matrizDe10));

function contarLikes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].likes > array[j + 1].likes) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

console.log(contarLikes(likesPorUsuario))
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}