const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Introduce num1 numero: "));
let num2 = parseFloat(prompt("Introduce num2 numero: "));

let suma = num1 + num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;
let resta = num1 - num2;
let exponente = num1 ** num2;

console.log("");
console.log("Estos son los resultados");
console.log("");
console.log("Resultado de la suma: %s", suma);
console.log("Resultado de la resta: %s", resta);
console.log("Resultado de la multiplicacion: %s", multiplicacion);
console.log("Resultado de la division: %s", division);
console.log("Resultado del modulo: %s", modulo);
console.log("Resultado del exponente: %s", exponente);
