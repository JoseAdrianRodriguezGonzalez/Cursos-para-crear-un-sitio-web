//nos sirve para utilziar las direcciones de archivos
const path=require('path')
const filepath=path.join('main.css')//une un directorio y lo convierte linux
console.log(path.basename(filepath))//devuelve el archivo base
console.log(path.dirname(filepath))//Indica la direccion sin el archivo
console.log(path.parse(filepath))//lo convierte a objeto

