// Exercici 1: Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
const potConduir = (edat) => (edat >= 18 ? "Pots conduir" : "No pots conduir");

// Exercici 2: Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
const compNum = (num1, num2) =>
    num1 > num2 ? "num1 és més gran" : "num2 és més gran";

// Exercici 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
const signe = (num) =>
    num > 0 ? "Es positiu" : num < 0 ? "Es negatiu" : "És zero";

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
const trobarMaxim = (a, b, c) =>
    a > b && a > c ? "A" : b > a && b > c ? "B" : "C";

// Exercici 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.
const parOImpar = (numbersArray) => {
    numbersArray.forEach((num) =>
        console.log(num % 2 === 0 ? `${num} es par` : `${num} es impar`)
    );
};
