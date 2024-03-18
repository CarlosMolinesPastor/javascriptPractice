//Para insertar textto desde la consola, primero tenemos que instalarlo con npm
//npm init
//npm install prompt-sync
const prompt = require("prompt-sync")();
//Variables
let edad = 36;
//Constantes
const nombre = "Pedro";
//Utilizacion de la variable directamente
console.log("Mi edad es: ", edad);
//Utilizacion de la cadena %s que sustituye a la variable constante que pongamos
console.log("");
console.log("Mi nombre es %s y mo edad es %d", nombre, edad);
console.log("");
//prompt-sync
console.log(
  "Jugamos con las variables y prompt-sync para almacenar entradas de texto",
);
const respuestaEdad = prompt("Escribe tu edad: ");
console.log("Tu edad es %s", respuestaEdad);
console.log("");
