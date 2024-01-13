const fs= require('fs')//modulo fs
/*
const first=fs.readFileSync('./data/first.txt','utf-8')//sin el utf, todo esta en el formato de buffer
console.log(first)
const second=fs.readFileSync('./data/second.txt','utf-8')
console.log(second)

fs.writeFileSync('./data/third.txt','este es un tercer archivo')//con esto crea un archivo y le puedes agregar un valor
const title='este es un nuevo contenido'
fs.writeFileSync('./data/fourth.txt',title,{
    flag:'a'
})//con esto se añade en vez de eliminar el dato
*/
fs.readFile('./data/third.txt','utf-8',function(error,data){
    if(error)
        console.log(error);
    console.log(data);
    fs.readFile('./data/second.txt','utf-8',function(error,data){
        if(error)
            console.log(error);
        console.log(data);
        fs.writeFile('./data/newFile.txt','ARCHIVO DESDE FS', (e,data)=>{
            if(e)
                console.log(e)
            console.log(data)
        })
    })
})
