const {readFile}=require('fs');
const {writeFile}=require('fs');
const {promisify}=require('util');//requiso el modulo para hacer promesas
const ReadFilePromise=promisify(readFile)//hace la promesa
/*
})}*/
 async function read (){
    try {
        const result = await ReadFilePromise('./data/first.txt','utf-8')
        const result2 = await ReadFilePromise('./data/second.txt','utf-8')
        const result3= await ReadFilePromise('./data/third.txt','utf-8')
        const result4 = await ReadFilePromise('./data/fourth.txt','utf-8')
        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error)
        throw new Error('Esto es un error')//Se cre<a un error 
    }
}
read();