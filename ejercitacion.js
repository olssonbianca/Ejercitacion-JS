// Sumar todas las notas y dividirlas entre la cantidad de notas a promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3

function promedioTotal(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3;
}
console.log(promedioTotal(10,9.50,9))

// Algoritmo para convertir una cantidad de pesos a dólares.

function pesoADolar(peso){
    return peso*111.11;
}
console.log(pesoADolar(100));

// Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.

function salario(salario){
    let descuento = (salario*20)/100;
    return salario - descuento;
}
console.log(salario(10000));

// Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 10.5 mostrar aprobado, de lo contrario, mostrar desaprobado.

function aprobar(nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3)/3;
    if (promedio>=10.5){
        return "aprobado"
    } else {
        return "desaprobado"
    };
};
console.log(aprobar(10,11,11));

// Ingresar un número y mostrar si es número par o impar. 

function parImpar (numero){
    if(numero % 2 == 1){
        return "es impar"
    }else{
        return "es par"
    };
};

console.log(parImpar(7))

// Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje "ACCESO DENEGADO".

function ingresar(usuario, contraseña){
    if(usuario === "ADMIN" & contraseña === "123456"){
        return "Acceso permitido"
    } else {
        return "Acceso denegado"
    }
};
console.log(ingresar("ADMIN", "12356"));

// Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.

    function multiplicameEsta(numero){
        if(numero>1 & numero<12){
            for(let i = 0; i<=10; i++){
                console.log(i*numero)
            }
        }else{
            return "esa tabla no me la se"
        }
    }
    console.log(multiplicameEsta(7));


// Escribir un programa que, ingresando un número, imprima los números desde 1 hasta ese mismo.

function imprimir(numero){
    for(let i = 0; i<=numero; i++){
        console.log(i);
    }
}
imprimir(5)