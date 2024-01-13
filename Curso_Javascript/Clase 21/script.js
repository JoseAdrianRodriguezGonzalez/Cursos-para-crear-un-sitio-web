/*
Arrays -Métodos II
.from(iterable) - convierte en array el elemento iterable

let word="Hola mundo";
console.log(Array.from(word));
console.log(word.split(' '));
/*
.sort([callback]) - Ordena los elementos de un array alfabeticamente(valor uniocode), si le pasamos un callback los ordena en función del algoritmo que le pasemos*/
/*
 const letters = ['b','h','g','z'];
 const numbers = [1,200,400,5,2343];
 console.log(letters.sort());
console.log(numbers.sort((a,b)=>a-b));  
console.log(numbers.sort((a,b)=>b-a));*/
 /*
.forEach(callback(curretnValue,[index]))- ejecuta la función indicada una vez por cada elemento del array
*//*
const numbers = [12,25,47,84,98];
numbers.forEach((number)=>console.log(number));
*/ 
/*
.some(callback) - compureba si al menos un elemento del array umple la condición
*//*
const words =['HTML','CSS','JavaScript','PHP'];
console.log(words.some(word => word.length>10));
console.log(words.every(word => word.length>2 ));
*//*
.every(callback) - compureba si todos los elementos del array cumplen la conidción
*/ 
/*
.map(callback) -. Transforma todos los elementos del array y devuelve un nuevo array

*//*
const numbers = [12,25,47,84,98];
numbers.map((number)=>console.log(number*2));
*/
/*.filter(callback)- fitlra todos los elementos del array que cumplan la condición y devuelve un nuevo array
*//*
const numbers = [12,25,47,84,98];

const numbers2=  numbers.filter(number=>number>40);
console.log(numbers2 )
*/
/* reduce(callback)-reduce todos los elemetnos del array a un único valor*/
const numbers = [12,25,47,84,98];
//console.log(numbers.reduce((a,b)=>a+b)) 
const users =[
    {
        name:'user 1',
        online:true
    },
    {
        name:'user 2',
        online:false
    },
    {
        name:'user 3',
        online:true
    },
    {
        name:'user 4',
        online:false
    },
    {
        name:'user 5',
        online:true
    },
    {
        name:'user 6',
        online:false
    }
]
const usersOnline =users.reduce((cont,user)=>{
    if(user.online)cont++
    return cont
},0 )
console.log(`Hay ${usersOnline} usuarios conectados`);