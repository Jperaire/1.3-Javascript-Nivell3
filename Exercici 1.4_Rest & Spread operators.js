// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 3, 7, 9];
const array2 = ["verde", "azul", "amarillo", "rosa"];
const array3 = [...array1, ...array2];

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
const suma = (...numeros) => {
    let res = 0;
    for (let i = 0; i < numeros.length; i++) {
        res += numeros[i];
    }
    return res;
};

console.log(suma(4, 7, 8, 10, 3, 2));

// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
const objecte1 = {
    propiedad1: "Propiedad 1",
    propiedad2: 2,
    propiedad3: "Propiedad 3",
};

const objecte2 = { ...objecte1 };

objecte2.propiedad3 = 3;

console.log(objecte1);
console.log(objecte2);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
const arrayDeValors = [1, "hola", 34, "mesa", 7, -90];
const [primeraVariable, segonaVariable, ...resta] = arrayDeValors;

// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
const tresArguments = (a, b, c) => {
    console.log(a, b, c);
};

const frutas = ["manzana", "piña", "pera"];

tresArguments(...frutas);

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
const usuario = {
    nombre: "Julen",
    edad: 28,
    deporte: "escalada",
};

const contraseña = {
    contraseña: 223344,
    fechaCreacion: 21092022,
};

const julen = { ...usuario, ...contraseña };
