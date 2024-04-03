//Ahora vamos a tratar la herencia en JavaScript. La herencia en JavaScript a traves de extends es m
//muy similar a otros lenguajes de programación orientados a objetos como Java o C++.

//Creamos la clase electrodomesticos
class Electrodomestico {
  constructor() {
    this._Encendido = false;
    this._Tension = 220;
  }
  //Método para encender el electrodomestico
  Encender() {
    this._Encendido = true;
  }
  //Método para apagar el electrodomestico
  Apagar() {
    this._Encendido = false;
  }
  //Método para obtener el estado del electrodomestico
  //Devuelve true si está encendido y false si está apagado
  EstaEncendido() {
    return this._Encendido;
  }
  get Tension() {
    return this._Tension;
  }
  set Tension(tension) {
    this._Tension = tension;
  }
}
class Lavadora extends Electrodomestico {
  constructor(rpm, kilos, encendido, tension) {
    //Importante, super() llama al constructor de la clase padre, es decir llama al cosntructofr de la clase que hereda (Electrodomestico)
    super(encendido, tension);
    this._RPM = rpm;
    this._Kilos = kilos;
  }
  get RPM() {
    return this._RPM;
  }
  set RPM(rpm) {
    this._RPM = rpm;
  }
  get Kilos() {
    return this._Kilos;
  }
  set Kilos(kilos) {
    this._Kilos = kilos;
  }
  Mostrar() {
    console.log(" ------- Datos de la lavadora");
    console.log(
      `RPM: ${this._RPM}, Kilos: ${this._Kilos}, Encendido: ${this._Encendido}, Tensión: ${this._Tension}`,
    );
    console.log(
      "al extender la clase electrodomestico, la lavadora hereda los métodos Encender, \nApagar, EstaEncendido, Tension y los atributos Encendido y Tension",
    );
    if (this.EstaEncendido()) {
      console.log("La lavadora está encendida");
    } else {
      console.log("La lavadora está apagada");
    }
    console.log(" ------- Fin de los datos de la lavadora");
  }
}
let l = new Lavadora(1200, 6, false, 220);
l.Mostrar();
console.log("Encendemos la lavadora", l.Encender());
console.log("Cambiamos la tensión de la lavadora a 110", (l.Tension = 110));
console.log("Cambiamos los kilos de la lavadora a 7", (l.Kilos = 7));
console.log("Cambiamos las RPM de la lavadora a 800", (l.RPM = 800));
console.log("Mostramos los datos de la lavadora");
l.Mostrar();
