let cadena = "Hola mundo";

/*Propiedades
lenght-> Devuelve la longitud de la cadena*/
//console.log(cadena.length) ;
/*toUpperCase->Devuelve la cadena a mayusuculas*/ 
/*console.log(cadena.toUpperCase()); 
let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);*/
/*tolowerCase()->Devuelve la cadena a minusculas*/

/*console.log(cadena.toLowerCase());*/
/*
indexOf(string)->Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1*/
/*
console.log(cadena.indexOf("mundo"));
*/
/*
replace(valor a, valor nuevo) ->Remplaza el fragmetno de la cadena que le digamos y pone el valor nuevo
*//*
console.log(cadena.replace('mundo','Juan'));
*/
/*
    substring(inicio[,fin])-> Extrae los caracteres desde inicio hasta el fin (el final no se incluye)

    Si no se incluye el fin extrae hasta el final
*//*
console.log(cadena.substring(3,7));
*/
/*slice (inicio ,[fin])--> Igual que substring pero dmite valores negativos, si ponemos valores negativos empezará desde atrás

Si noo incluye el final extrae hasta el final
(2,4) ->Em'pieza a cxontar en el tercer caracter y los 4 ultimos no los considera
*//** 
console.log(cadena.slice(1,-3));
*/

/*
trim()-ZElimina los espacios al inciio y al final de la cadena
*/
let cadena2 = "Hola Youtube estamos trabajando en cadenas";
/*
console.log(cadena2.trim());
*/
/*startsWith(valor,[inicio]) ->Sirve para saver si la cadena empieza con ese valor,Devuyelve true or false*/
/*
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('m',5));
*/
/*endsWith(valor,[longitud])-> Sirve para saber si la cadena termina con ese valor. Devuelve true o false*//*
console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('m',6));
*/
/*Includes(valor[inicio])->Igual que indexOf pero deuvelve true o false *//*
console.log(cadena.includes("Hola"))
*/
/*repaet (valor)->Repite el string el numero de vece que le indiquemos */
let cadena3 = "Hola";
console.log(cadena.repeat(3));

let nombre= 'Juan';
let apellido = 'Gómez';
let edad=20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`)