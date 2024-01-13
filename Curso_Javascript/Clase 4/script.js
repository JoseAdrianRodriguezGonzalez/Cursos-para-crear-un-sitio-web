/* Objeto Math

Objeto Estático 
Tenemos que usar su nombre

Propiedades:
    Math.E => Math.Pi

    Métodos:
    Math.abs(x) Devuevle el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande o igual que un numero
    Math.floor(x)->Devuelve el entero más grande mayor o igual que un número
    Math.pow(x,y)->Devuevlve la potencia de x elevado a y
    Math.random()-> Devuelve un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano
    Math.sign(x) Devuelve el valor de la x que indica si x es positivo, negativo o 0
    Math.sqrt()Devuelve la raiz cuadrado de x
*/
/*Constante de Euler*/
console.log(Math.E);

/*Constante de pi*/
console.log(Math.PI);
let num=-5;
console.log(Math.abs(num));
let num1=5.3;
console.log(Math.ceil(num1));
let num2=5.3;
console.log(Math.floor(num1));
let num3=5;
console.log(Math.pow(num3,2));

console.log(Math.round(Math.random()*100));
 /*Numero aleatorio dentro de un limite
let min=0;
let max=100;
console.log(Math.round(Math.random()*(max-min)+min));
*/
console.log(Math.sign(0));//-1 0 
console.log(Math.sqrt(9));

console.log(Math.round(Math.pow(1000,1/3)));