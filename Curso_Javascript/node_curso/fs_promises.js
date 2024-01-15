const {readFile}=require('fs/promises');
/*
})}*/
 async function read (){
    try {
        const result = await readFile('./data/first.txt','utf-8')
        const result2 = await readFile('./data/second.txt','utf-8')
        const result3= await readFile('./data/third.txt','utf-8')
        const result4 = await readFile('./data/fourth.txt','utf-8')
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