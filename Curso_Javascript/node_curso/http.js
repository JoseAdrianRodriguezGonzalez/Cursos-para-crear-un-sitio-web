const http=require('http');
//Crea el servidor
http.createServer((request,response)=>{
    console.log(request.url) //Imprime la peticion
    if(request.url==='/'){ //Si es la pagina principal
        response.write('Welcome to the server');//Pone esto en pantalla
        return response.end(); //Sale de la condicional con el final de la respeusta
    }
    if(request.url==='/about'){//Si esta en about
        response.write('Acerca de');//Imprime esto
        return response.end();
    }//Si es una pagina que no existe
    response.write(`
    <h1>Not found</h1>
    <p>Esta página no se encontro</p>
    <a href="/" >volver a la pagina principal</a>`) //  Imprime este codigo html
    response.end()
}).listen(3000)//   Estará en el puerto 3000
console.log('servidor escuchando en el puerto 3000')