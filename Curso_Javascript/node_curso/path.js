//nos sirve para utilziar las direcciones de archivos
const path=require('path')
const filepath=path.join('main.css')//une un directorio y lo convierte linux
console.log(path.basename(filepath))//devuelve el archivo base