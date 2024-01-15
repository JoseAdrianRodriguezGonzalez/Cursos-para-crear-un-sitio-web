const {writeFile}=require('fs/promises')
const creatBigFile=async ()=>{
    await writeFile('./data/bigFile.txt','hello world'.repeat(10000))
}
creatBigFile()
const{createReadStream}=require('fs')
const stream=createReadStream('./data/bigFile.txt',{
    encoding:'utf-8',

})//se dispara al leer
stream.on('data',(chunk)=>{
    console.log(chunk)
})
//Se dispara cuando finalzia de leer
stream.on('end',()=>{
    console.log("Finalizo la lectura")
})
//se dispara un error
stream.on('error',(error)=>{
    console.log(error)
})