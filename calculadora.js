const prompt = require("prompt-sync")({sigint:true});
let a = Number(prompt("ingresa el primer valor: "));
let b =Number(prompt("ingresa el segundo valor: "));
let c;

// Crear una función sumar, esta deberá recibir dos parámetros 
//y retornar la suma de los mismos.

function suma (){
    return a + b;
};

// Crear una función restar, la cual deberá recibir dos parámetros 
// y retornar la resta del primero menos el segundo.
function resta (){
    return a - b;
};

// Crear una función multiplicar, la misma deberá recibir dos 
// parámetros y retornar el resultado de su multiplicación.

function multiplicar (){
    return a * b;
};

// Crear una función dividir, la cual recibirá dos parámetros 
// y retornar el resultado de la división del primero sobre el segundo.
function dividir (){
    return a/b;
}


// Crear una función que se llame cuadradoDeUnNumero, la cual recibe 
//un número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función 
//multiplicar() para calcular el cuadrado del parámetro ingresado a 
//cuadradoDeUnNumero()

function cuadradoDeUnNumero(){
    b = a; 
    return multiplicar(a);
}


// Crear la función promedioDeTresNumeros, la misma deberá calcular el 
// promedio de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones 
// previamente creadas de nuestra calculadora.

function promedioDeTresNumeros(){
    c =Number(prompt("ingrese el tercer numero: "))
    let ssuma = suma() + c;
    return ssuma/3;
}


// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: 
// el número total y el porcentaje que se le quiere calcular. Deberá 
// retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es 
// el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones 
// previamente creadas de nuestra calculadora.

function calcularPorcentaje(){
    return (a * b) / 100;
}

//Crear una función GeneradorDePorcentaje que recibe 
//dos parámetros y deberá retornar el porcentaje del primero 
//con respecto al segundo.
//Importante: GeneradorDePorcentaje() deberá utilizar 
//algunas funciones previamente creadas de nuestra calculadora.
//Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, 
//ya que 2 es el 1% de 200.

function generadorDePorcentaje(){
    b=100;
    c =Number(prompt("ingrese el tercer numero: "));
    return multiplicar(a)/c;
}

