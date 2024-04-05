//Importamos el modulo fs
var fs = require("fs");

try {
  //Comprobamos la existencia del fichero
  fs.statSync("./fichero.txt");
  console.log(
    "fs.statSync(ruta del fichero, codificacion) => El fichero existe",
  );

  //Lectura de ficheros
  console.log(
    "fs.readFileSync(ruta del fichero, codificacion) => Lectura de fichero, si no existe da error",
  );
  const datos = fs.readFileSync("./fichero.txt", "utf8");
  console.log(datos);
} catch (err) {
  console.log("Error: ", err.message);
}

//Escritura de ficheros
//Creacion de un nuevo fichero
let cadena =
  "\nEsto es un ejemplo de texto a insertar en un documento llamado nuevo.txt";
fs.writeFileSync("./nuevo.txt", cadena);
console.log(
  "fs.writeFileSync(ruta del fichero, datos) => Crea un nuevo fichero con los datos indicados",
);

//Lectura de ficheros
let nuevoLeido = fs.readFileSync("./nuevo.txt", "utf8");
console.log(
  "fs.readFileSync(ruta del fichero, codificacion) => Lectura de fichero, si no existe da error",
);
console.log("Fichero Leido\n");
console.log(nuevoLeido);

//Añadir datos a un fichero
console.log(
  "\nfs.appendFileSync(ruta del fichero, datos) => Añade datos al final del fichero",
);
let anyadir = "\nEsto es un texto4 añadido al final del fichero";
let anyadir2 = "\nEsto es un texto5 añadido al final del fichero";
fs.appendFileSync("./nuevo.txt", anyadir);
fs.appendFileSync("./nuevo.txt", anyadir2);
console.log("Datos añadidos\n");
fs.readFileSync("./nuevo.txt", "utf8");
let otraforma = "Anadido mediante writeFileSync(archivo, linea, {flag: 'a+'})";
fs.writeFileSync("./nuevo.txt", otraforma, { flag: "a+" });
let modificado = fs.readFileSync("./nuevo.txt", "utf8");
console.log(modificado);
