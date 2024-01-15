const http =require('http')
const {createReadStream}=require('fs')
const server=http.createServer((req,res)=>{
    const stream=createReadStream('./data/bigFile.txt',{
        encoding:'utf-8'
    })
    stream.on('data',(chunk)=>{
        stream.pipe(res)
    })
    stream.on('error',error=>{
        console.log(error)
    })
})
server.listen(3000)
console.log(`Server on port${3000}`)