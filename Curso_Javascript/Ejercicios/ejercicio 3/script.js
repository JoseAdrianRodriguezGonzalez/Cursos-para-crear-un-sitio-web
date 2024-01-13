/*Es cirbe un programa que pida todos los numeros pares e impares de un numero dado */
let numero=parseInt(prompt("Escriba un número"));
for (let i = 1; i <= numero; i++) {
    if(i%2==1){
        console.log(`${i} es impar`);
    }else{
        console.log(`${i} es par`);
    }
    
}