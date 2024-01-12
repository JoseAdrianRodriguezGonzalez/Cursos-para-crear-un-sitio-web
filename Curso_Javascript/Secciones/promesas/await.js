const fetchPosts =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=['post1','post2','post3'];
            const error=true;
            if(!error){
                resolve(posts)
            }else{
                reject('hubo errores');
            }
        },2000)
    })
} //fetch significa que vas a relaizar una petición
//fetchPosts().then((posts)=>{console.log(posts)}).catch((mensaje)=>{console.log(mensaje)});
/**Las funciones then y catch son importantes para poder acceder a la información */


/******Codigo asíncrono
 * 
 * 
 * Las promesas son códigos asíncronos es un código que se ejectua de fondo, y no va a permitir que las demás lineas de códigos se ejecuten
*
*
*
Async y await nos ayudarán a cambiar el orden de como se ejecutan las tares,
*/
const mostrarPosts=async()=>{
   // await permite trabajar de fondoy que pueda tener caracterisitcas especiales, por ejemplo, que la promesa evite que lo demás prosiga, para poder trabajar con await, necesita estar contenida en una función que utilice async, indicando que es asíncrona la función
   //También se puede trabajar con el bloque try-catch al usar await/async
   try{
    const post=await fetchPosts();
    console.log(post);
   }catch(error){
        console.log(error)
   }
  
   /**
    * 
    * 
    * Todas las líneas delante del await no se ejecutarán hasta que haya una respuesta
    * 
    */
 
}
mostrarPosts();
/**Trabaja con async y await es la forma más limpia d etrabajar las promesas */