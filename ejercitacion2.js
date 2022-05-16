// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.


function loopDePares(num){
    for( let i = 0; i <= 100; i++){
        if( (num + i) % 2 == 0){
            console.log(`El número ${num+i} es par`);
        } else {
            console.log(i);
        }
    }
}
console.log (loopDePares(2));

// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

function loopDeImpares(numero, palabra){
        for( let i = 0; i <= 100; i++){
        if( (numero + i) % 2 == 1){
            console.log(palabra);
        } else {
            console.log(i);
        }
    }
}
console.log (loopDeImpares(3, "lalala"));


// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)

function sumatoria(numero){
    let suma = 0;
    for( let i = 0; i <= numero; i++){
        suma += i 
    }
    return suma;
}
console.log(sumatoria(4));

//Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
//nuevoArreglo(5) debe retornar [1,2,3,4,5]

function nuevoArreglo(num){
    let array=[];
    for(let i = 0; i <= num; i++){
        array.push(i)
    }
    return array
}
console.log(nuevoArreglo(5));


//Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

function split(txt){
    let array = [];
    for( let i = 0; i <= txt.length -1; i++){
        array.push(txt[i])
    }
    return array
}
console.log(split("hola"));

for (let i = 1; i <= 100; i++) {
if (i % 3 === 0 && i % 5 !== 0) {
    console.log("fizz");
} else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("buzz");
} else if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
} else {
    console.log(i);
}
};

let array = [
    3,
    6,
    67,
    6,
    23,
    11,
    100,
    8,
    93,
    0,
    17,
    24,
    7,
    1,
    33,
    45,
    28,
    33,
    23,
    12,
    99,
    100
];

  // Escribe tu función debajo de esta linea.
function mostrarIndice(unArray, index) {
    console.log(unArray[index]);
}

  // Invoca tu función debajo de esta linea.
mostrarIndice(array, indice);
