/*
Se utiliuza cuando una conidcion sea true o false al igual que el if
Su ejecucion puede tener 1 o varias sentencias, en el caso en el que tenga varias se tiuenen que separar por comas entre parentesis
*/

let num =3;
(num%2==0)? console.log("Es par") : console.log("Es impar");

(num%2 ==0)?(
    console.log (`${num} es par`),
    console.log(`${num} es par de 2`)
)
:
(
    console.log (`${num} es impar`),
    console.log(`${num} es impar`)
)