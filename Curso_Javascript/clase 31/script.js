const button =document.getElementById('button')
/*
Objeto window - Es el objeto global, de él descienden todos los objetos
alert() da alertas rapidas
prompt() escribe texto y se puede guardar
confirm() acepta o cancela un acción
*//*
if(confirm('Acepta?')){
    console.log('El usuario acepto');
}else{
    console.log('el usuario no acepto');
}*/  
/**
 *Objeto consola- Es el objeto que contiene la consola del navegador
 https://developer.mozilla.org/es/docs/Web/API/Console
 console.log()  imprime algo en pantalla
 console.dir()  imprime algo en pantalla pero con menu desplegable
 console.error()  muestra mensajes de error
 console.table()    muestra en forma de tabla los valores
 
 */
const person ={
    name: 'Dorian',
    age:30,
    email: 'dorian@gmail.com'
}
/*objetos location - Es el objeto que contiene la barra de direcciones
https://developer.mozilla.org/es/docs/Web/API/Location
location.href   permite ver la dirección del archivo
location.protocol   permite ver el protcolo que maneja
location.host       permite ver el dominio al que pertenece
location.pathname   permite ver la dirección restante
location.hash       permite dar parametros entre paginas y permite tener un solo html para distintas paginas
location.reload()   recarga la pagina 
*/
console.log(location.href);

console.log(location.protocol);

console.log(location.host);

console.log(location.pathname);

console.log(location.hash);

//console.log(location.reload());
/*
history.back(); Va una pagina atras
history.front(); va una página hacia adelante
history.go(n|-n); Va n paginas hacia adelante o atrás
history.length(); te dice el tamaño del historial de esa pestaña
*/
const date =new Date();
console.log(date);
button.addEventListener('click',()=>{
    setTimeout(saludar,'3000');
})
const saludar=()=>{
    console.log("hola");
}
/*
setTimeout(()=>{
    console.log(location.reload());
},"5000");*/
/* setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

  Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/
let cont =0;

const interval =setInterval(()=>{
    console.log(cont);
    cont++;
},"3000");
button.addEventListener('click',()=>{
    clearInterval(interval);
})