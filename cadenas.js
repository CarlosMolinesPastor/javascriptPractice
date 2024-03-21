//Cadenas y manejo de cadenas
console.log("Mensaje con comillas dobles");
console.log("Comillas simples");
console.log('Comillas "dobles" dentro de comillas simples');
console.log("");
console.log("Esto es un parrafo con dos lineas\nEsto es la segunda linea");
console.log("");
console.log(`Esto es un parrafo con dos lineas\n\ty la segunda tabulada`);
console.log("");
console.log(
  "Esto es un parrafo con dos lineas\n\vy la segunda tabulada verticalmente",
);
console.log("");
let texto =
  "Esto es una cadena en varios \
regnglones para que sea leida facilmente\
es importante hacerlo asi \
ya sabes...";
console.log(texto);

// Metodos propios de las cadenas de texto
// cadenaDeTexto.Metodo(Parametros)
console.log("");
console.log("#### METODOS PROPIOS DE CADENA DE TEXTO ####");
console.log("");
let cadena = "Mi nombre es Carlos";
console.log(cadena);
console.log("");
console.log("Numero de caracteres, cadena.leght ", cadena.length);
console.log("");
console.log(
  "Devuelve el caracter de la posicion 4 cadena.charAt(4)",
  cadena.charAt(4),
);
console.log(
  "Devuelve el caracter ASCII de la posicion cadena.charCodeAt(4)",
  cadena.charCodeAt(4),
);
console.log(
  "Accedemos al valor directamente como si fuera un array cadena[4]",
  cadena[4],
);
console.log(
  "Posicion en la cadena de 'nombre' indexOf()",
  cadena.indexOf("nombre"),
);
console.log(
  "Posicion en la cadena de 'por' indexOf(), no lo encuentra devuelve -1",
  cadena.indexOf("por"),
);
console.log(
  "Possicion de la cadena 'nombre' search() que hace lo mismo que indexOf(), pero admite segundo parametro \
  que indica en que posicion empezar a buscar.",
  cadena.search("nombre"),
);
