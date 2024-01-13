/*
    Eventos de ratón:
    click -cuando pulsamos el botón izquierdo del ratóon
    dbclick - cuando pulsamos dos veces seguiadas el botón izquierdo del ratón
    mouseenter - cuando entramos  la zona que tiene el eveto
    mouseleave - cuando salimos de la zona qu tiene el evento
    mousedown -cuando pulsamos y no solatmos el botón izquierdo delr atón
    mouseup - cuando soltamos el boton izquierod del ratón
    mousemove-cuando movemos el ratón
    eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - caundo soltamos una tecla
    keypress - cuando puslamos una tecla y no la soltamos 
 */




const button =document.getElementById('button');

const box =document.getElementById('box');
const input = document.getElementById('input');
/*
button.addEventListener('click',()=>{
    console.log("Presionado");
})
*//*
button.addEventListener('dblclick',()=>{
    console.log("doble click");
})*//*
box.addEventListener('mouseenter',()=>{
    box.classList.replace('red','green')//La forma correcta de cambiar los estilos desde javascript
})
box.addEventListener('mouseleave',()=>{
    box.classList.replace('green','red');
})
*//*
box.addEventListener('mousedown',()=>{
    console.log("Has pulsado en la caja");
})
box.addEventListener('mouseup',()=>{
    console.log("Has soltado en la caja");
})
*//*
box.addEventListener('mousemove',()=>{
    console.log("Estás moviendo el ratón aquí");
})¨
*/
/*
let veces=0;
input.addEventListener('keydown',()=>{
    veces++;
    console.log(`Has presionado ${veces}`);
})
*/
input.addEventListener('keyup',()=>{
    console.log("Has soltado una tecla");
})
input.addEventListener('keypress',()=>{
    console.log("estas pulsano una tecla");
})
