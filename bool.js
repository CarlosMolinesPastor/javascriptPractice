//Booleanos
const prompt = require("prompt-sync")();
//True or false
//

console.log("(2<3)&&(3==3) =  ", 2 < 3 && 3 == 3);
console.log("3==3 && 2>3 =  ", 3 == 3 && 2 > 3);
console.log("2==3 && 2>3 =  ", 2 == 3 && 2 > 3);

let valorTrue = true;
let valorFalse = false;
console.log("let valorTrue =  ", valorTrue);
console.log("let valorFalse =  ", valorFalse);
console.log("!valorTrue =  ", !valorTrue);
console.log("!valorFalse = ", !valorFalse);
console.log("");

let num1 = parseInt(prompt("Escribe el num 1 :  "));
let num2 = parseInt(prompt("Escribe el num 2 :  "));
console.log("");
console.log("%s > %d  = ", num1, num2, num1 > num2);
console.log("%s < %d  = ", num1, num2, num1 < num2);
console.log("%s == %d  = ", num1, num2, num1 == num2);
console.log("%s != %d  = ", num1, num2, num1 != num2);
console.log("%s <= %d  = ", num1, num2, num1 <= num2);
