const prompt = require("prompt-sync")();
//While

console.log(
  "Funcionamiento del bucle while \n x=0 \n Mientras x<6 sacamos sumamos 1 a x y lo mostramos por pantalla",
);
x = 0;
while (x < 6) {
  console.log(x);
  x++;
}

console.log("");
console.log(
  "Funcionamiento del bucle FOR \n i=0 \n Mientras que i<5 sumamos una y lo mostramos ",
);

for (i = 0; i < 5; i++) {
  console.log(i);
}

console.log("");
console.log(
  "Funcionamiento del bucle DO \n Pedimos al usuario que introduzca un valor superior a 100 \n Cuando no lo introduzca salimos del bucle",
);
let numero = 0;
do {
  numero = parseInt(prompt("Introduce un numero < 100:  "));
  if (numero < 100) {
    console.log(
      "El numero " + numero + " introducido es un numero menor que 100",
    );
  }
} while (numero < 100);
console.log("El numero " + numero + " introducido es un numero superior a 100");

//Bucles Anidados
console.log("");
console.log("Bucles anidados, unos desntro de los otros");
let num = 0;
while (num < 4) {
  for (let i = 0; i < 3; i++) {
    console.log("Dentro de un bucle for i = " + i);
  }
  console.log("Dentro un for de un while mientras num de while  < 4 = " + num);
  num++;
}
