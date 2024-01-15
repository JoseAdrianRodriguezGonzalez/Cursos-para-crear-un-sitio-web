/*console.log("first");
setTimeout(()=>{
    console.log("second");
},2000)
console.log("third");
*/
const http=require('http');
const Server=http.createServer((req,response)=>{
    if(req.url==='/'){
        response.write('Welcome to the server')
        return response.end();
    }
    if(req.url==='/about'){
        //heavy task
        response.write('about page')
        //for(let i=0;i<100000;i++){
        //    console.log(Math.random()*i)
        //}
        return response.end()
    }
    response.end('Not found');
      
})
Server.listen(3000);
console.log(`Server on port 3000`)