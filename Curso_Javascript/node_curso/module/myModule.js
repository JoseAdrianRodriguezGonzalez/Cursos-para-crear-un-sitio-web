let secret="1234";
const myNumber=30;
const myArray=[10,20,30]
const user={
    name:'ryan',
    lastname:'ray'
}
const myWebAddress="faztweb.com";
const group={
    myweb:myWebAddress,
    Number:myNumber,
    usuario:user,
    arreglo:myArray
}
module.exports.usuario=user//Se exporta una variable
module.exports.number=myNumber//exporta indivudalmente
module.exports.arreglo=myArray
module.exports.adress=myWebAddress
