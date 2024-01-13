console.log("Hola");
let num=parseInt(prompt("Introduzca un numero"));
let resultado=1;
for(let i=num;i>0;i--){
    resultado*=i;

}
console.log(`el numero ${num} su factorial es ${resultado}`);