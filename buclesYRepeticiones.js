/*Crear una función que pida un valor por 
parámetro y muestre los 10 números siguientes.*/

function contador(numero){
    for(let i = numero; i<= (numero+10); i++){
        console.log(i)
    }
}
contador(10);

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.
function deTresEnTres(){
    for(let i = 5; i <= 20; i+=3)
        console.log(i);
}
deTresEnTres();

//Escribir un programa que muestre la sumatoria de todos 
//los números entre el 0 y el 100

function deUnoACien(){
    let suma = 0
    for(let i = 0; i<=100; i++){
        suma = suma + i;
    }
    return suma;
};
console.log(deUnoACien());

//Dado un número entero positivo, mostrar su factorial. 

function deUnoACien(numero){
    let multi = 1;
    for(let i = 1; i<=numero; i++){
        multi = multi * i;
    }
    return multi;
};
console.log(deUnoACien(9));

//Crear una función que muestre todos los números de la secuencia 
//de fibonacci hasta el valor ingresado por parámetro. 

function fibonacci(numero){
    let aux= 0;
    let aux2= 1;
    let aux3;
    for( i = 1; i<=numero; i++){
        aux = aux + i;
        aux2= aux2 + i;
        aux3 = aux2+aux;
        console.log(aux3)
    }
    return aux3;
}

console.log(fibonacci(5));
