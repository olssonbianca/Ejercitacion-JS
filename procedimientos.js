/*Declará una función llamada totalAPagar() que reciba como parámetros: 
vehiculo y  litrosConsumidos. 
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
Si el vehículo es “coche”, el precio por litro es de $86.
Si es “moto”, ha de ser $70.
Si es “autobús”, ha de ser $55.
Si los litros consumidos están entre 0 y 25, se ha de añadir
$50 al total a pagar.
Si los litros consumidos son mayor a 25, se ha de añadir $25 al 
total a pagar.*/

function totalAPagar(vehiculo, litrosConsumidos){
    let extra = (litrosConsumidos < 25) ? 50 : 25;
    let precio;
    if(vehiculo === "coche"){
        precio = 86;
    } else if (vehiculo === "moto") {
        precio = 70;
    } else {
        precio = 55;
    }
    return precio * litrosConsumidos + extra
}
console.log(totalAPagar("coche", 10));


/*Nos llega un string indicando el tipo de sándwich base. Estos 
tienen un valor base diferente por cada selección:
Pollo = $150 (“pollo”)
Carne = $200 (“carne”)
Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. 
Tienen para elegir entre otras tres opciones, por lo que recibiremos 
también otro string con el tipo de pan deseado:
Blanco c/orégano y parmesano = $50 (“blanco”)
Negro c/avena = $60 (“negro”)
Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere 
los siguientes adicionales:
Queso = $20
Tomate = $15
Lechuga = $10
Cebolla = $15
Mayonesa = $5
Mostaza = $57*/

let pollo = 150;
let carne = 200;
let veggie = 100;
let blanco = 50;
let negro = 60;
let sGluten = 75; 

function sandwich(proteina, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precioProteina;
    if(proteina === "carne"){
        precioProteina = carne;
    } else if (proteina === "pollo"){
        precioProteina = pollo; 
    } else {
        precioProteina = veggie;
    }
    let precioPan;
    if (pan === "blanco"){
        precioPan = blanco;
    } else if (pan === "negro"){
        precioPan = negro; 
    } else {
        precioPan = sGluten;
    }
    let precioAdicional = 0;

    /*----- IF TERNARIO -------- CONDICION ? TRUE : FALSE; */
    queso ? precioAdicional = precioAdicional + 20 : precioAdicional;
    tomate ? precioAdicional = precioAdicional + 15 : precioAdicional;
    lechuga ? precioAdicional = precioAdicional + 10 : precioAdicional;
    cebolla ? precioAdicional = precioAdicional + 15 : precioAdicional;
    mayonesa ? precioAdicional = precioAdicional + 5 : precioAdicional;
    mostaza ? precioAdicional = precioAdicional + 57 : precioAdicional;

    return precioProteina + precioPan + precioAdicional ;

}

console.log(sandwich(carne,blanco,false, true));

/*Creá una función que reciba un parámetro numérico y 
verifique si el mismo es el número secreto. El número secreto deberá
ser seleccionado de manera random de entre 1 y 10 —investigá qué hace 
la función Math.random()—. En caso de ser correcto, retorna un mensaje 
felicitando al usuario y, en caso de que no acierte, retorna un mensaje 
de aliento junto con el número ingresado y el secreto.*/

function secrect(numero){
    let numerosecret = Math.random()
    if(numero === numerosecret){
        return "felicidades"
    } else {
        return "Es incorrecto"
    }
}
console.log(secrect(0)); 

/*Crea una función llamada abrirParacaidas() que recibe dos parámetros:
velocidad y altura. La función deberá decirnos si el paracaídas debe 
abrirse teniendo en cuenta lo siguiente:
La velocidad debe ser menor a 1000 km/h.
La altura debe ser mayor o igual a 2000 m y menor a 3000 m.*/

function abrirParacaidas(velocidad, altura){
    if(velocidad<1000 & altura>= 2000 & altura<3000){
        return "abrir paracaidas";
    }else{
        return "todavia no"
    }
}

console.log(abrirParacaidas(900, 4000));

/*Usando la estructura switch, crea un programa en el que si un +
usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos 
devuelva la misma palabra traducida al idioma inglés. 
En caso de que la palabra sea distinta a la esperada, mostrarle un 
mensaje que le informe que la palabra ingresada es incorrecta.*/

function traductor(palabra){
    switch (palabra) {
        case "casa":
            palabra="house";
        break;
        case "perro":
            palabra="dog"
        break;
        case "pelota":
            palabra="ball";
        break;
    }
    return palabra;
}

console.log(traductor("perro"));

/*Usando la estructura switch, pedirle al usuario que valore 
la película que acaba de ver según la siguiente escala:
Muy mala.
Mala.
Mediocre.
Buena.
Muy buena.
Acompaña cada valoración con un mensaje que indique si 
te lamentás o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el 
mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.*/

function valorar(valoracion){
    switch(valoracion){
        case "Muy mala":
            valoracion="calificaste como muy mala";
        break;
        case "Mala":
            valoracion="calificaste como mala"
        break;
        case "Mediocre":
            valoracion="Calificaste como mediocre"
        break;
        case "Buena": 
            valoracion = "Calificaste como buena"
        break;
        case "Muy buena":
            valoracion = "Calificaste como Muy buena"
        break;
        default: 
            "Comprensión de texto a marzo"
        break;
    }
    return valoracion;
}
console.log(valorar("Muy buena"));