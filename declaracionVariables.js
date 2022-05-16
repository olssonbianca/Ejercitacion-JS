
const prompt = require("prompt-sync")({sigint:true});
/* ----------------- Declaración de variables ---------------------

Utilizando un console.log() ahora crea un mensaje o 
párrafo que combine Strings con estas variables que creaste en el punto anterior. */ 
const nombre = "Bianca Olsson";
// const edad = "18";
const fechaNacimiento = "01-07-2003";
const ciudad = "Oberá";
const profesion = "Desempleada";
const hobbie = "Dormir";
let mensaje = "Hola" + " " + "me llamo" + " " + nombre + " " + "tengo " + edad + ", " + "naci el " 
+ fechaNacimiento + " " + "en " + ciudad + " " + "soy " + profesion + " y me gusta " + hobbie;
console.log(mensaje);

/* ----------------- Calculador de días -------------------------- 

Por medio de la función prompt() pedile al usuario que ingrese su edad, y guardala en una variable.
Luego de eso calcula cuántos días de vida lleva en función de su edad.
(ej. si el usuario tiene 30 años serían 10,950 días)
PD: recorda que cada año tiene 365 días, y no consideraremos los años bisiestos.
Finalmente mostrá la respuesta por la consola.*/

let edad = Number(prompt("ingresá tu edad: "));
let vida = edad*365 + " dias";
console.log(vida); 

/* ------------------ Abastecimiento de Por Vida ---------------
Crea una variable y asignale tu edad.
En otra variable estima cuál será tu edad máxima.
Declará una tercera variable con el nombre de tu snack o comida favorita.
Hace un estimativo de cuantos snacks o cuantos platos de esa comida consumiras por día, 
y guarda ese número en otra variable.
Calculá cuánto te queda por comer en el resto de tu vida.
Mostrá el resultado en la consola: "Vas a necesitar XX platos o raciones de XXXX para que 
te alcancen hasta los XX años."
Agregale un precio por unidad y descubrí cuánto vas a gastar en esa comida el resto de tu vida. 
*/ 
let edadHoy = Number(prompt("ingresá tu edad actual: "));
let edadMaxima = Number(prompt("ingresá tu expectitativa de vida: "));
let tusBesosBB = Number(prompt("ingresá la cantidad de besos que necesitas: "));
let edadDiferencia = ( edadMaxima - edadHoy ) * 365; 
let abastecimiento = edadDiferencia * tusBesosBB;
console.log(abastecimiento);


/* ------------------ Abastecimiento de Por Vida ---------------
Ahora vamos a organizar unas vacaciones y calcular cuánto dinero vas a necesitar para la comida.
Almacená en una Variable la cantidad de días que vas a estar de viaje.
Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
Declará la Variable comida.
Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
Mostrá el resultado en la consola: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".
*/
let diasViaje = Number(prompt("ingresá la cantidad de dias de viaje: "));
let presupuestoMaximo =  Number(prompt("ingresá tu presupuesto máximo: "));
let comida =  Number(prompt("ingresá la cantidad de comidas diarias: "));;
let comidaViaje = diasViaje * comida; 
let comidaMaxima = presupuestoMaximo/comidaViaje; 
console.log(comidaMaxima + " pesos");