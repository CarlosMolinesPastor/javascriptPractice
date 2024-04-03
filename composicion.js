//Vamos a ver la composicion
//La composicion es un concepto que nos permite crear objetos complejos a partir de otros objetos mas simples
//En este caso vamos a crear un triangulo a partir de 3 puntos
//Cada punto es un objeto simple que tiene una X y una Y

class Punto {
  constructor(X, Y) {
    this._X = X;
    this._Y = Y;
  }
  mostrarPunto() {
    console.log("El punto es: (%s,%s)", this.X, this.Y);
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

//Creamos una clase que representa un triangulo
class Triangulo {
  constructor(punto1, punto2, punto3) {
    this._punto1 = punto1;
    this._punto2 = punto2;
    this._punto3 = punto3;
  }
  get Punto1() {
    return this._punto1;
  }
  set Punto1(nuevoPunto1) {
    this._punto1 = nuevoPunto1;
  }
  get Punto2() {
    return this._punto2;
  }
  set Punto2(nuevoPunto2) {
    this._punto2 = nuevoPunto2;
  }
  get Punto3() {
    return this._punto3;
  }
  set Punto3(nuevoPunto3) {
    this._punto3 = nuevoPunto3;
  }
  mostrarTriangulo() {
    console.log("------- El triangulo tiene los puntos: ---------");
    this._punto1.mostrarPunto();
    this._punto2.mostrarPunto();
    this._punto3.mostrarPunto();
    console.log("------- Fin del triangulo -------");
  }
}
let p1 = new Punto(2, 5);
let p2 = new Punto(3, 6);
let p3 = new Punto(4, 7);
let triangulo = new Triangulo(p1, p2, p3);
triangulo.mostrarTriangulo();
console.log(
  "\n -- Modificamos los puntos -- \n p1.X = 5 \n p1.Y = 7 \n p2.X = 6 \n p2.Y = 8 \n p3.X = 7 \n p3.Y = 9 \n -- Fin de la modificacion -- \n",
);
p1.X = 5;
p1.Y = 7;
p2.X = 6;
p2.Y = 8;
p3.X = 7;
p3.Y = 9;
triangulo.Punto1 = p1;
triangulo.Punto2 = p2;
triangulo.Punto3 = p3;
triangulo.mostrarTriangulo();
