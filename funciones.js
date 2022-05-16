/*--------- FUNCIONES------ 
Modificar la función para que tome por parámetro un nombre y salude a esa persona 
cuando el lenguaje la ejecute.
Modificar la función para que solicite al usuario ingresar su nombre con prompt */

function saludar() {
    let nombre = prompt(" ¿Cómo te llamas ? ")
    return (`hola, ${nombre}  tanto tiempo sin verte.`);
};
console.log(saludar());


/* vas a darle un valor 
    retornar ese valor por 2 mas 5 */

function multiplicarPorDosYSumarleCinco(){
    let numero = Number( prompt(" ingresa un numero "));
    return (numero * 2 + 5)
};
console.log(multiplicarPorDosYSumarleCinco())

/*-------------- IF/ELSE -------------*/

/*En este ejercicio nos viene dada una variable llamada lenguaje, 
que tiene asignado un string. Nuestro trabajo es construir un condicional
if/else para que, si la variable contiene "javascript", imprima por 
consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo 
aprenderé más adelante".*/

let lenguaje = "javascript"; 
if(lenguaje === "javascript"){
    console.log("Estoy aprendiendo");
} else {
    console.log("Lo aprenderé mas adelante"); 
};

/*Debemos completar la función puedePasar para que, 
analizando el nombre que recibe por parámetro, determine 
si la persona puede pasar o no. Si la persona se llama 
"Cosme Fulanito", no lo dejará pasar y lo indicará retornando 
false; si la persona se llama de otra forma, lo dejará pasar 
y lo indicará retornando true.*/

let puedePasar = (nombre) => {
    if(nombre == "Cosme Fulanito") {
        return false;
    } else {
        return true; 
    }
}; 
console.log(puedePasar("Cosme Fulanito"));

/*Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. 2,54*/
function convertidor() {
    let pulgadas = Number(prompt("ingresa un número: "))
    return pulgadas*(2.54);
};
console.log(convertidor());

/* Crear una función que recibe un string y lo convierte en una URL. 
Ej: “pepito” es devuelto como “http://www.pepito.com”*/
function URL(){
    let mensaje = prompt("ingresa lo que se te cante ")
    let mensajeCompleto = `http://www.${mensaje}.com `;
    return mensajeCompleto
};
console.log(URL());
/*Crear una función que recibe un string y devuelve la misma frase pero
con admiración.*/ 

function mesaje(){
    let mensaje = prompt("ingresa lo que se te cante ")
    let mensajeCompleto = `¡${mensaje}!`;
    return mensajeCompleto
}
console.log(mesaje());

/*Crear una función que calcule la edad de los perros, 
considerando que 1 año para nosotros son 7 de ellos.


ESTA ESTA EXPRESADAAA */

let edadPerrho = function(){
    let edad = Number(prompt("¿Cuál es la edad del perro? "))
    return edad*(7);
}
console.log(edadPerrho());

/*Crear una función que calcule el valor de tu hora de trabajo, 
introduciendo tu sueldo mensual como parámetro.
*/
// ARROW FUNCTION

let horaTrabajo=()=>{
    let sueldito = Number(prompt("ingrese su sueldo: "));
    return sueldito/(40)
}
console.log(horaTrabajo());

/*Crear la función calculadorIMC() “Índice de Masa corporal = kg/(mt2)” 
que reciba la altura en metros y el peso en kilogramos y calcule el IMC 
de una persona. Luego, ejecutar la función probando diferentes valores.*/ 

function calculadorIMC(){
    let altura = Number(prompt("ingrese su altura en metros: "));
    let peso = Number(prompt("ingrese su peso en kilos "));
    return peso/(altura*2);
}
console.log(calculadorIMC());

/*Crear una función que recibe un string en minúscula, 
lo convierta a mayúsculas y lo retorne. 
Investigá qué hace el método de strings .toUpperCase()*/

function minAMayusc(minuscula){
    let mensaje = minuscula.toUpperCase(); 
    return mensaje
}

console.log(minAMayusc("no me grites"));

/* Crear una función que recibe un parámetro y devuelve qué tipo 
de dato es ese parámetro.*/

function dato(tipoDato){
    return typeof(tipoDato);
}
console.log(dato(true));

/*Crear una función que le pasamos el radio de un círculo y 
nos devuelve la circunferencia.*/

function circulo(radio){
    return 2 * Math.PI * radio;
}
console.log(circulo(10));