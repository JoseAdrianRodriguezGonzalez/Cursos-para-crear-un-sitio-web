//Las promesas son peticiones al navegador indicandole que espera y no ejecute más código hasta que nosotros le devolvamos algún dato
//Se crea una nueva promesa
/**¨************Declaracion de la promesa */
const promesa=new Promise((resolve,reject)=>{
    //Se coloca una acción a ejecutar
    setTimeout(()=>{
        //Se comprueba si la operación fue exitosa
        const exito=false;

        if(exito){
            resolve('la operacion tuvo exito');
        }else{
            //se usa la función reject para poder ostrar un error
            reject('la operacion falló');
        }
    },4000)
});
/***Acceder a la promesa */
/***
 * 
 * Con esa funcion de then, ibndicamos si nuestra promesa, o nuestra operación fue exitosa o no
 */
promesa.then((mensaje)=>{
    alert(mensaje);
});
//El metodo catch, nos permite capturar algun error
promesa.catch((mensaje)=>{
    alert(mensaje);
});