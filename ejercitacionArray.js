// Crear la estructura adecuada para guardar las siguientes películas:
// 	"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de las películas una vez creada la estructura correspondiente.

let pelicula1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let pelicula2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().

function tupperWar(Array){
    let mayus = [];
    for(let i = 0; i < Array.length; i++ ){
        mayus.push(Array[i].toUpperCase());
    };
    return mayus
};
console.log(tupperWar(pelicula1));

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:
// 	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

function tupperWar(array1, array2){
    let Array = array1.concat(array2)
    let mayus = [];
    for(let i = 0; i < Array.length; i++ ){
        mayus.push(Array[i].toUpperCase());
    };
    return mayus
};
console.log(tupperWar(pelicula1, pelicula2));

// Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

function tupperWar(array1, array2){
    let Array = array1.concat(array2)
    Array.pop(); 
    let mayus = [];
    for(let i = 0; i < Array.length; i++ ){
        mayus.push(Array[i].toUpperCase());
    };
    return mayus
};
console.log(tupperWar(pelicula1, pelicula2));

// Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
	const asiaScores = [8, 11, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las funciones y testear su correcto funcionamiento .

function pesadilla (array1 , array2) {
    let verdadero = [];
    for(let i = 0; i < array1.length; i++){
        if (array1[i] === array2[i]) {
            verdadero.push(true);
        } else {
            verdadero.push(false);
        }
    }
    return verdadero;
}
console.log(pesadilla(asiaScores,euroScores))


// Creá la función inversor que tome un array como argumento y devuelva uno nuevo invertido.

function imprimirInverso(Array){
    let inverso = [];
    for(let i = Array.length - 1 ; 0 < i  ; i--){
        inverso.push(Array[i]);
    }
    return inverso
}
console.log(imprimirInverso(pelicula1))

// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos. Ejemplo: 


function sumArray(array){
    let suma= 0; 
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    };
    return suma
};
console.log(sumArray([1,2,3]))  // 6   
console.log(sumArray([10, 3, 10]) ); // 23
console.log(sumArray([-5,100, 19]) )     // 114

// Simulación Array.join()
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:

function join(array){
    let union =  array.join("")
    return union
};

console.log(join(["h","o","l","a"]));  
console.log(join(["c","h","a","u"]));