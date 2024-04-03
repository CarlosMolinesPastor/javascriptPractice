//vamos a estudiar las excepciones en javascript
//las excepciones son errores que se producen en tiempo de ejecución
//y que hacen que el programa se detenga
//para evitar que el programa se detenga, podemos usar la estructura try-catch
const prompt = require("prompt-sync")();
console.log("Inicio del programa para sumar dos numeros \n");
function Sumar() {
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let suma = num1 + num2;
  console.log(`La suma de ${num1} + ${num2} es ${suma}`);
}
try {
  Suma();
} catch (error) {
  console.log("Ocurrió un error: " + error.message);
} finally {
  console.log("Fin del programa");
}
