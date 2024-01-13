/* Spread operator(operador de expansión)
Su sintaxis es ... */

const numbers = [-12,2,3,23,43,2,3]
console.log(...numbers);
//Enviar elementos en un array a un función
/*
const addNumbers =(a,b,c)=>{
    console.log(a+b+c);

}
let numbersToUp =[1,2,3]
addNumbers(...numbersToUp);
*/
//Añadir un array a otro array
/*
let Users =['marta','jaime','laura'];
let newUsers=['javier','david','rosa','juan','mercedes'];

Users.push(...newUsers);
console.log(Users);
*/
//copiar 
/*
let arr1=[1,2,3,4];
let arr2=[...arr1];
console.log(arr2);
*/  
//concatenar arrays
/*
let arr1=[1,2,3,4];
let arr2=[6,7,8];
let arrConcat =[...arr1,...arr2]
console.log(arrConcat);
*/
//enviar un número indefinido de argumentos a una función (parametros REST)
/*const restParms=(...numbers)=>{
    console.log(numbers);
}
restParms(1,2,3,4,5,6);*///libreria math
console.log(Math.max(...numbers));
//eliminiar elementos duplicados
 console.log([...new Set(numbers)]);