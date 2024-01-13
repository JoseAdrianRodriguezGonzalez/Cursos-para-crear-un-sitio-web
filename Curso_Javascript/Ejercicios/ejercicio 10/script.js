const colores=["azul","amarillo","rojo","verde","rosa"];
let color=prompt("¿Qué color quiere preguntar").toLowerCase();

if(colores.indexOf(color)!==-1){
    console.log(`Si está ese color`);
}else{
    console.log(`No está ese color`);
}