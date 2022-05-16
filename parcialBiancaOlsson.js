//Ejercicio 1

let estudiante = {
	nombre: "Bianca",
    apellido: "Olsson",
    camada: 7,
    esParcial: true
};


function futuraNota(nota) {
    let estado;
    if (nota < 4 ){
        estado = "Desaprobado";
    }
    else if (nota < 7 && nota >= 4 ){
        estado = "Debe rendir examen final";
    }
    else{
        estado =  "Promocionado"; 
    };
    return `El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es ${estado}`;
};

console.log(futuraNota(10)); //El alumno obtuvo una nota igual a 10 por lo tanto su condición es Promocionado
console.log(futuraNota(7));// El alumno obtuvo una nota igual a 7 por lo tanto su condición es Promocionado
console.log(futuraNota(6)); //El alumno obtuvo una nota igual a 6 por lo tanto su condición es Debe rendir examen final 
console.log(futuraNota(4)); //El alumno obtuvo una nota igual a 4 por lo tanto su condición es Debe rendir examen final   
console.log(futuraNota(3)); //El alumno obtuvo una nota igual a 3 por lo tanto su condición es Desaprobado


//Ejercicio 2

let clase = [];

console.log(clase); // [] este es el resultado del console.log que hice antes de agregar los objetos.

clase.push(    {
    nombre: "Jimena",
    apellido: "Simanca",
    bimestre: 2,
},
{
    nombre: "Florencia" ,
    apellido: "Maza Vega",
    bimestre: 2,
},
{
    nombre: "Julieta" ,
    apellido: "Podadera",
    bimestre: 2,
});


console.log(clase); // El resultado del array luego de agregar los objetos [   { nombre: 'Jimena', apellido: 'Simanca', bimestre: 2 },     
                    // { nombre: 'Florencia', apellido: 'Maza Vega', bimestre: 2 },  { nombre: 'Julieta', apellido: 'Podadera', bimestre: 2 } ]

function siguienteCursada(clase){
    for(let i = 0; i < clase.length; i++){
        clase[i].bimestre += 1;
    }
    return clase;
};
console.log(siguienteCursada(clase)); // Así se ve el array luego de la sumatoria de bimestre: 
                                    // [{ nombre: 'Jimena', apellido: 'Simanca', bimestre: 3 },     
                                    // { nombre: 'Florencia', apellido: 'Maza Vega', bimestre: 3 },  { nombre: 'Julieta', apellido: 'Podadera', bimestre: 3 }]

//Ejercicio 3

const  asistenciaMinima = 23;

function estadoEstudiante(asistencias,playground){
    if (asistencias>=asistenciaMinima && playground==true){
    return "Aprobado";
    }
    else {
        return "Desaprobado";
    };
};
console.log(estadoEstudiante(23,true)); //Aprobado
console.log(estadoEstudiante(12,true)); //Desaprobado
console.log(estadoEstudiante(23,false));//Desaprobado
console.log(estadoEstudiante(24,true));//Aprobado








