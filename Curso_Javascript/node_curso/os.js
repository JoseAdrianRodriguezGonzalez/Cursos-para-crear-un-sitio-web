//Este modulo nos permite trabajar con lso recurosos dl servidor o computadora
const os=require('os');
console.log(os.userInfo());
console.log(os.uptime()/(3600*24))//tiempo en segundos
console.log(os.platform())//muestra el sistrema operativo
console.log(os.totalmem())//muestra la memoria
console.log(os.freemem())//y la que esta libre
 console.table({
    os:os.platform(),
    version:os.release(),
    totalMemory:os.totalmem()
 })