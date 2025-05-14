
miFuncion1();
miFuncion2();
function miFuncion1() {
  console.log("Funcion 1");
}

function miFuncion2() {
  console.log("Funcion 2");
}


// Funcion de tipo callback
let imp = function imprimir(mensaje) {
  console.log(mensaje);
};

function sumar(op1, op2, functioncallback) {
  let res = op1 + op2;
  functioncallback(`Resultado: ${res}`);
}

sumar(10, 5, imp);

//PRACTICA
//function mensaje( mostrar ){
//console.log( mostrar );
//}

//function restar(n1, n2, callback){
//  let resultado = n1 - n2;
//callback (`Este resultado se muestra en la funcion mensaje: ${resultado}`);
//}

//restar(20, 18, mensaje);

//Llamadas asincrinas con uso de la funcion setTimeout
function miFunciontimeout(){
  console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFunciontimeout, 3000);

setTimeout( function() { console.log('Saludo asincrono 2')}, 4000);

setTimeout( () => console.log('Saludo asincrono 3'), 5000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//Cada 1 segundo se ejecuta


