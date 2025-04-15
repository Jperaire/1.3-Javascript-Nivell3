// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
const processar = (nombre, callback) => {
    callback(nombre);
};

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.
const calculadora = (a, b, op) => op(a, b);
const suma = (num1, num2) => num1 + num2;

console.log(calculadora(2, 9, suma));

// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
};

const saludar = (nom) => console.log(`Hola como estas ${nom}`);

esperarISaludar("Julen", saludar);

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
const processarElements = (array, callback) => {
    array.forEach((element) => {
        callback(element);
    });
};

const imprimirElement = (element) => console.log(element);

processarElements([2, 5, 8], imprimirElement);

// Exercici 5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
const processarCadena = (string, callback) => {
    const upperCase = string.toUpperCase();
    callback(upperCase);
};

const imprimirCadena = (string) => console.log("Esta es la cadena:", string);

processarCadena("Hellow world", imprimirCadena);
