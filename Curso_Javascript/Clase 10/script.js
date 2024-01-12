let numbers = [1,2,3,4,5,6,7,8,9,1];
/*Arrays- propiedad
    .length -devuelve el número de posiciones que contiene el array
*/
/*
Arrays -metodos
    Array.isArray() - Devuelve true si la variable es un array
    */
   /*
   Eliminar un elemento
    .shift() - Elimina el primer elemento del array y devuelve ese elemento
    .pop() - Elimina el último elemento de un array y devuelve ese elemento

*/
/*Añadir elementos 
.push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud
.unshift(element1,element2,...) - Añade uno o más elementos al comienzo del array y devuelve la longitud.
*/ /*

console.log(numbers.length);


let number =4;
console.log(Array.isArray(numbers ));
*/

//console.log(numbers);
//numbers.shift();
//numbers.pop();
//console.log(numbers);
/*
console.log(numbers);
let elemente=numbers.shift();
console.log(elemente);
*//*
numbers.push(6);
console.log(numbers);
let newlength2 =numbers.unshift(0);
console.log(numbers);

/*
.indexOf() Devuelve el primer indice del elememto que conicde con el valr especificado, 0 -1 si ninguno es encontrado
*/
/*.lastIndexOf() - Devuelve el último índice del elemento que concida con el valor especificado o -1 si ininguo es encontrado*/

//console.log(numbers.lastIndexOf(1));
/*
.reverse() - Inviertye el orden de los elementos del array */
/*
.join(separador) - Devuelve un string con el separador que indiquemos por defecto son comas *//*
console.log(numbers);
numbers.reverse();
console.log(numbers); 
*/
//console.log(numbers);
//console.log(numbers.join(" "));
/*
.splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentos y/o agregandos nuevos elementos 
a- Indice de incio
b-numero de elemneoits
items, elementos a añadir en el caso de que se añadan*/
//console.log(numbers);
//numbers.splice(3); elimina desde la posicion tres hasta el final 
//numbers.splice(2,2)-elimina desde la posicion a los valores que e indiquemos
//numbers.splice(2,0,2,10,23,54); //- si b es un valor sdistinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items apartir de la posición a
//console.log(numbers);
/*
    .slice(a,b) - Extrae elementos de un array desde el indice a hasta el indic b. Si no existe b lo hace desde a hasta el final, Si no existe ni a ni b hace una copia de la original

*/
/*
let newnumbres = numbers.slice();
console.log(numbers);
console.log(newnumbres);
*//*
let newnumbres = numbers.slice(2);
console.log(numbers);
console.log(newnumbres);
    Extrae los dvalores antes del anterior indice
*//*
let newnumbres = numbers.slice(2,6);
console.log(numbers);
console.log(newnumbres);
Indica de donde inica y hasta donde termina el indice de extracciópn 
*/