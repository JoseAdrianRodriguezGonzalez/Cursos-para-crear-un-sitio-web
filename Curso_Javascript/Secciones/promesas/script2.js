const fetchPosts =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=['post1','post2','post3'];
            const error=false;
            if(!error){
                resolve(posts)
            }else{
                reject('hubo errores');
            }
        },2000)
    })
} //fetch significa que vas a relaizar una petición
fetchPosts().then((posts)=>{console.log(posts)}).catch((mensaje)=>{console.log(mensaje)});
/**Las funciones then y catch son importantes para poder acceder a la información */