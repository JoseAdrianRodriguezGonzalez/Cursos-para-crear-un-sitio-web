/*
Sone strucutras que nos permiten almacenar varios datos y agruparlos
Se pueden llenar en cualquier tipo de datos valid de Javascript y deben ir separados por comas
Se pueden mazclar tipos dde datos, peor no es reocomendable
Se declaran con llaves cuadradas o corchetes[]
Pueden declararse vacíos o con un contenido ya establecido 
pueden añadirse o elimianrse elementos ene l momento que queramos
let array = [] //array vacío
let numeros = [1,2,3,4,5] //array con contenido inicial
*/


let numeros =[1,2,3,4,5,6];
let palabras= ["hola", "estamos","en","youtube"];
console.log(numeros[5]+numeros[2]);
console.log(numeros);
console.log(` La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`); 