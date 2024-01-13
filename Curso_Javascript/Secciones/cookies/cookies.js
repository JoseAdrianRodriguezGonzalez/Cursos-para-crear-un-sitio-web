/**Las cookies nos sirven para guadrdar información, es como sif ueran variables en el navegaor, que por ejemplo, no queremos guardarlo en una base de datos, como en las perefeerencias de una web */



/**Las cookies se pueden ver en f12 almacenameitno */
const CrearCookie=()=>{
    //document.cookie='nombre=Carlos';
    document.cookie='nombre=Carlos;expires= 1 Jan 2024 01:00:00 UTC';
};
const Login=()=>{
    const usuario=prompt('Usuario:');
    document.cookie=`nombre=${usuario}`;
}
/**
 * Obtener coooki conjs puro
 */
let usuario;
//Separa las cookies de los ;, ya que cada ;, es un nuevo valor
const cookies=document.cookie.split(';');
cookies.forEach((cookie)=>{//para cada valor
    //busco el primer valor del arreglo, que es el token
    const porpiedad=(cookie.split('=')[0])
    if(porpiedad=='nombre'){//si es igual a nombre
        usuario=cookie.split('=')[1];//extraigo el valor de la cookie
    }
})
if(usuario){
    console.log(`Hola ${usuario}`)
}else{
    console.log("Inicia sesión")
}
    //la imprimo
const cerrar=()=>{
    document.cookie='nombre=;expires= 1 Jan 2020 01:00:00 UTC'
    console.log("hasta luego")
}