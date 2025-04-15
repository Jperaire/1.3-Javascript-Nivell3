// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hola mundo");
    }, 2000);
});

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
promesa1.then((res) => console.log(res));

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
let input = "Hola";
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") resolve("Éxito");
        else reject("Fracaso");
    }, 2000);
});

promesa2.then((res) => console.log(res));

// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
const imprimeix1 = async () => {
    console.log(await promesa1);
};

imprimeix1();

// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const imprimeixAmbGestioErrors = async () => {
    try {
        console.log(await promesa1);
    } catch (error) {
        console.error(error);
    }
};

imprimeixAmbGestioErrors();

// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
const promesaA = new Promise((resolve) => {
    setTimeout(() => resolve("Primer resultat (2s)"), 2000);
});

const promesaB = new Promise((resolve) => {
    setTimeout(() => resolve("Segon resultat (3s)"), 3000);
});

Promise.all([promesaA, promesaB]).then((resultats) => {
    console.log("Resultats de Promise.all:", resultats);
});
