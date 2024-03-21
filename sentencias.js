//Sentencias
const prompt = require("prompt-sync")();
console.log("Sentencia if else...");

let num1 = parseInt(prompt("Ingresa el numero 1 :  "));
let num2 = parseInt(prompt("Ingresa el numero 2 :  "));

console.log("");
console.log("Comprobamos mediante if else los numeros introducidos: \n");
if (num1 >= num2) {
  console.log(
    "El numero 1: %s es mayor o igual que el numero 2: %d",
    num1,
    num2,
  );
} else {
  console.log(
    "El numero 1: %s es menor o igual que el numero 2: %d",
    num1,
    num2,
  );
}

let dato = prompt(
  "Ingresa el tipo de material: roca, madera, arcilla, agua:  ",
);
console.log("");
console.log("Utilizamos el switch case\n");
switch (dato) {
  case "roca":
    console.log("Has elegido la roca");
    break;
  case "madera":
    console.log("Has elegido la madera");
    break;
  case "arcilla":
    console.log("Has elegido la arcilla");
    break;
  case "agua":
    console.log("Has elegido el agua");
    break;
  default:
    console.log("No has elegido ningun elemento de la lista");
    break;
}
