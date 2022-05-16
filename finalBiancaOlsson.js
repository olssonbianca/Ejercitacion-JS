// -----------------Ejercicio 1------------------

// Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio. 
// ¿Qué tipo de dato contiene la variable “alumnos”?

//-- La variable alumnos contiene un array de objetos

// ¿Cuáles son las claves que puedes identificar?

//--- las claves son: id, nombre, apellido, legajo, notas. 

// Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*) 

const alumnos = [
{
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
},
{
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
},
{
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
},
{
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
},
{
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
},
];


function ordenarLegajo(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length -1; j++) {
			if (arr[j].legajo < arr[j + 1].legajo) {
				let aux = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = aux;
			};
		};
	};
	return arr;
};

console.log(alumnos);
console.log(ordenarLegajo(alumnos));


// -------------- Ejercicio 2 ------------------------

//     Crear un método que retorne el promedio de notas. (*)
//     Crear una función que ordene las notas del alumno de forma ascendente. (*)

let alumno = {
    id: 5,
    nombre: "Lucas",
    apellido: "Astrada",
    legajo: 20220125,
    notas: [10,6,8,7,9],
    promedio: function(){
        nota = 0;
        for (i = 0; i < this.notas.length ; i++) {
            nota += this.notas[i];
        };
        return (nota /  this.notas.length)
    },
};

console.log(alumno.promedio()) // promedio = 8

function ordenarNotas(alumno){
    for (let i = 0; i < alumno.notas.length; i++) {
		for (let j = 0; j < alumno.notas.length-1; j++) {
			if (alumno.notas[j] > alumno.notas[j+1]) {
				let aux = alumno.notas[j];
				alumno.notas[j] = alumno.notas[j + 1];
				alumno.notas[j + 1] = aux;
			};
		};
	};
    return alumno.notas
};

console.log(alumno);
console.log(ordenarNotas(alumno)); //[ 6, 7, 8, 9, 10 ]


// -------------- Ejercicio 3 ----------------

// Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.

let Matriz3por3 = function() {
    let matriz = [];
    let contador = -1;
    for (let fila = 0; fila < 3; fila++) {
        let array = [];
        for (let col = 0; col < 3; col++) {
        array.push(contador--);
        };
            matriz.push(array);
    };
    return matriz;
};
console.table(Matriz3por3());


// Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 

let matrizPrueba = [ 
[1, 2, 3, 45, 5],
[5, 8, 6, 3, 1],
[8, 9, 10, 14, 555],
[0, 25, 75, 8, 65],
[19, 88, 45, 30, 29],
]; 


function sumMultiplosDe5(matriz){
    let sum = 0
    for(let i = 0; i < matriz.length ; i++){
        for( let j = 0; j < matriz[i].length ; j++){
            if(matriz[i][j] % 5 === 0){
                sum += matriz[i][j];
            };
        };
    };
    return sum;
};

console.log(sumMultiplosDe5(matrizPrueba))

// Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.

function sumarMatriz(matriz){
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado += matriz[i][j];
            
        };
    };
    if(resultado % 2 === 1){
        return   true;
        //return resultado
    } else {
        return   false;
        //return resultado
    };
    
};
console.log(sumarMatriz(matrizPrueba));

// Crear una función que retorne la multiplicación de las diagonales de la matriz. 

function multiplicarDiagonales(matriz){
    let resultado = 1;
    for(let i = 0; i < matriz.length; i++){
        resultado *= matriz[i][i];
        resultado *= matriz[i][matriz.length- (1+i)];
    }
    return resultado;
}
console.log(multiplicarDiagonales(matrizPrueba));



