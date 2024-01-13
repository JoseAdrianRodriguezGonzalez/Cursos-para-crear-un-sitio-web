let numeros=[1,2,3,4,5];
let pares=[];
let impares=[];
let resultado=0;
let random=0;
for (let i = 0; i < numeros.length; i++) {
    random=(Math.round(Math.random()*(10+1)));
    resultado=random*numeros[i];
    console.log(`${random}*${numeros[i]}=${resultado}`);
    if(resultado%2==0){
        pares.push(resultado);
    }
    else{
        impares.push(resultado);
    }
    
}
console.log(pares);
console.log(impares);
