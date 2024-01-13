const http=require('http');

http.createServer((request,response)=>{
    response.write('hello world')
    response.end()
}).listen(3000)
console.log('servidor escuchando en el puerto 3000')