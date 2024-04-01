//Vemos las clases
//Clase que representa un punti
class Punto {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
  }
}
let punto = new Punto(3, 4);
console.log(punto);

class Punto2 {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
  }
  mostrarPunto() {
    console.log("El punto2 es (%s,%s)", this.X, this.Y);
  }
}
let punto2 = new Punto2(2, 4);
punto2.mostrarPunto();

//Get y Set. Los atributos empiezan por _, y los metodos sin _
class Punto3 {
  constructor(X, Y) {
    this._X = X;
    this._Y = Y;
  }
  mostrarPunto3() {
    console.log("El punto3 es: (%s,%s)", this.X, this.Y);
  }
  //get y set de la X
  get X() {
    return this._X;
  }
  set X(nuevaX) {
    this._X = nuevaX;
  }
  //get y set del punto Y
  get Y() {
    return this._Y;
  }
  set Y(nuevaY) {
    this._Y = nuevaY;
  }
}

let punto3 = new Punto3(3, 3);
punto3.mostrarPunto3();
console.log("Coordenada X = %s", punto3.X);
console.log("Coordenada Y = %s", punto3.Y);
console.log(" -- Modificamos los puntos --");
console.log("punto3.X = 4", (punto3.X = 4));
console.log("punto3.Y = 4", (punto3.Y = 4));
punto3.mostrarPunto3();
console.log("Coordenada X = %s", punto3.X);
console.log("Coordenada Y = %s", punto3.Y);
