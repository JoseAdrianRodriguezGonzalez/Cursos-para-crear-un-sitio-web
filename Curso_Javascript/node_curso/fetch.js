const link=fetch('https://jsonplaceholder.typicode.com/posts')
   // .then(res=>res.json())
    //.then(data=>console.log(data))
try {
    const resp=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await resp.json()    
    console.log(data)
} catch (error) {
    console.log(error)
   }
   //Por el hecho de de usar module en packaje.json puedes utilizar este fe4c¿tcgh asincorno sin necesidad de funcion