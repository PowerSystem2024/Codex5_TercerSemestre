let miPromesa = new Promise( (resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correctamente');
    } else{
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//    .then( valor => console.log(valor))
//    .catch(error => console.log(error));

let promesa = new Promise( (resolver) => {
    //console.log('Inicio promesa');
    setTimeout( () => resolver('Saludos desde promesa, callback, funcion flecha, setTimeout'), 3000);
    //console.log('Final promesa');
});

// Llamado a la promesa
//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
    return 'Saludos con promesas y asinc'
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function miFuncionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await');
    });
    console.log(await miPromesa);
}
//miFuncionConPromesaYAwait();

//Promesas, await, async, setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log('Inicio Funcion');
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000);
        console.log('Final funcion');
    });
    console.log(await miPromesa);
}

//Llamamos a la funcion
funcionConPromesaAwaitTimeout();