/*
for(let variable of estrucutra){
    codigo a ejecutar
    break rompe el bucle}
    continue se salta la poicion que le indiquemos
} */
let names = ['Paco','José','Maria','Paula'];
for(let name of names){
    console.log(names);
}
for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}