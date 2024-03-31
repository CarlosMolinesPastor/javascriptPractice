// Vemos el manejo de arrays
//
//Dos formas de crear arrays
console.log("CREACION DE ARRAYS DE DOS FORMAS [],new Array");
console.log("");
let animales = ["perro", "gato", "tiburon", "rana"];
let paises = new Array("España", "Japon", "EEUU", "Rusia");
console.log(animales);
console.log(paises);
console.log("");

console.log("ACCEDEMOS POSICIONES");
console.log("");
console.log("Posicion 0: animales[0]");
console.log(animales[0]);
console.log("Posicion 1: animales[1]");
console.log(animales[1]);
console.log("Posicion 2: animales[2]");
console.log(animales[2]);
console.log("Posicion 3: animales[3]");
console.log(animales[3]);
console.log("");

console.log("METODOS DE LOS ARRAYS");
console.log("");
console.log("length: devuelve numero de elementos");
console.log("Numero de elementos: ", animales.length);
console.log("sort()");
console.log("Orden de los elementos: ", animales.sort());
console.log(
  "push('elemento'): añade un elemento al final, devuelve 'numero' de elementos",
);
console.log(
  "Añadimos cactaua, devuelve numnero de elementos: ",
  animales.push("cacatua"),
);
console.log("Añadimos cacatua, listamos elementos: ", animales);
console.log("pop(): eliminamos el ultimo elemento: cacatua");
console.log(
  "Eliminamos el elemento: ",
  animales.pop(),
  "\nListamos los animales: ",
  animales,
);
console.log("");
console.log("Cadenas de texto: toString(): Convierte en cadena de texto");
console.log("animales.toString(): ", animales.toString());
console.log("join -> cadena de texto con el separador que le pasemos");
console.log("join(':') -> ", animales.join(":"));
console.log("");
console.log(
  "Elimina el primer elemento del array -> shift(), devuelve el elemento eliminado",
);
console.log(
  "Eliminamos el primer elemento del array: ",
  animales.shift(),
  "\n",
  animales,
);
console.log(
  "Añade como primer elemento del array -> unshift('elemento'), devuelve numero de elementos",
);
console.log(
  "Añadimos caballo: ",
  animales.unshift("caballo"),
  "\nListamos animales: ",
  animales,
);
console.log("");
console.log(
  "splice('n' -> posicion que se añaden, 'n' -> numero elementos a borrar, 'elementos' -> elementos que se insertaran)",
);
console.log(
  "Añadimos loro y cebra a partir de posicion 2 -> ",
  animales.splice(2, 0, "loro", "cebra"),
  animales,
);
console.log("");
console.log(
  "reverse() -> Invierte el orden de los elementos, devuelve los elementos",
);
console.log(animales.reverse());
console.log(
  "slice -> Devueleve array nuevo a partir de array, -> slice('n' -> primer elemento ''obligatorio'', 'n' -> elemento final del array no incluido)",
);
console.log(
  "Creamos un array a partir de la segunda posicion hasta la cuarta-> ",
  animales.slice(2, 4),
);
console.log("");
console.log("RECORREMOS LOS ARRAYS, ITERAMOS CON ELLOS BUCLE FOR");
console.log("");
console.log("Bucle for: for (let i = 0; i < animales.length; i++)");
for (let i = 0; i < animales.length; i++) {
  console.log(i, " ", animales[i]);
}
console.log("");
console.log("Bucle for: for(i in animales)");
for (i in animales) {
  console.log(i, " : ", animales[i]);
}
console.log("");
console.log("Bucle for: for(animal of animales)");
for (animal of animales) {
  console.log("animal", animal);
}
