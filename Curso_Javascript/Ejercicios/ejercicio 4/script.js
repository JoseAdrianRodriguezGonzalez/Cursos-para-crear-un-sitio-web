let numero =parseInt(prompt("Escriba un número"));
let contador=0;
if(numero===1){
    console.log(`${numero} es invalido`)
}
else{


for (let i = 2; i <=numero; i++) {
    if(numero%i==0){
        contador++;

    }

}
if(contador==1){
    console.log(`${numero} es primo`);
}else{
    console.log(`${numero} no es primo`)
}
}