let boton=document.getElementById('boton1');
boton.addEventListener('click',()=>{
    /**La función setItem, añade una valor en el local storage */
    const nombre= prompt("Escribe tu nombre");
    window.localStorage.setItem('nombre',nombre);
})
if(window.localStorage.nombre){
  console.log('hola',window.localStorage.nombre);
}else{
    console.log("Hola anonimo");
}
document.getElementById('boton2').addEventListener('click',()=>{
    window.localStorage.removeItem('nombre');
})