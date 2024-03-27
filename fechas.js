//Fechas trabajamos con fecas de la clase Date
let fecha = new Date();
let fechaPasada = new Date(2019, 11, 29, 20, 30, 55);
console.log("new Date() =  ", fecha.toString());
console.log("new Date(2019,11,29,20,30,55); =  ", fechaPasada.toString());
console.log("Ojo con los meses que van de 0 a 11 ******");
console.log("fecha.toUTCString() =  ", fecha.toUTCString());
console.log("");

console.log("fecha.getFullYear() =  ", fecha.getFullYear());
console.log("fecha.getMonth()", fecha.getMonth());
console.log("........");
console.log("");

fecha.setFullYear(2000);
console.log("fecha.setFullYear(2000)", fecha.toString());
console.log(fecha.setFullYear(2013));
console.log("fecha.setFullYear(2013)", fecha.toString());
