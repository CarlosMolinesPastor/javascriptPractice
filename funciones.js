//Repaso de funciones

const prompt = require("prompt-sync")();

//Funcion es mayor que cero
console.log("FUNCION MAYOR QUE 0");

function EsMayorCero(valor) {
  if (valor > 0) {
    console.log("El valor de %s es mayor que 0", valor);
  } else {
    console.log("El valor de %d es menor que 0", valor);
  }
}

console.log("");
function IntroValor() {
  let introValor = parseInt(prompt("Introduce un numero:  "));
  return introValor;
}

EsMayorCero(IntroValor());

console.log("");

//Funciones anidadas
console.log("FUNCION SUMA CON FUNCIONES ANIDADAS");

function Suma() {
  let valor1 = IntroValor();
  let valor2 = IntroValor();
  let suma = valor1 + valor2;
  return suma;
}

function Resultado() {
  let resultado = Suma();
  return resultado;
}
console.log("");
console.log(" La suma de ambos valores es: ", Resultado());
console.log("");
