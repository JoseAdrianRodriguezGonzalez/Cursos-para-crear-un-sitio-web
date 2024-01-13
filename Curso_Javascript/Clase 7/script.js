
/*
Se utiliza para elegir un camino de vairis preestablecidos tenemos dos principales el simple y el multiple 
*/

let num =3;
switch(num){
    case 1:
        console.log(`${num}El numero es 1`);
        break;
    case 2:
        console.log(`${num}El numero es 2`);
        break;
    default:
        console.log(`${num}Numero no vale ni 1 ni 2`);
}
switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num}Num es impar`);
        break;
    case 2:
    case 4:
    case 6:
        console.log(`${num}Numero es par`);
}