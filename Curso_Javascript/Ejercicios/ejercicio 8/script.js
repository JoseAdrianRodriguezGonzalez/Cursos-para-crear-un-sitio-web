const primer=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
const numero=prompt("Introduzca su DNI: ");

if(numero.length==8&&parseInt(numero)>0){
    console.log(`Tu DNI completo es ${numero}${primer[numero%23]}`);
}

