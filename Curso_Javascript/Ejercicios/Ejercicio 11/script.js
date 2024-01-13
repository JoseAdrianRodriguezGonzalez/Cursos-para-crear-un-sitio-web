/*Crea una clase libro
La clase libro  tendrá titulo, autor, año y género
Crea un metodo que devuevla toda la información del lñibro 
Pide 3 libros y guardalos en un array 
Los libros se introducirán al arrancar el programa pidinedo los datos con prompt
Validar que los campos no se introduzcan vacíos 
Validar que el año sea un número y qeue tenga 4 digitos
Validar qie elñ genero sea "aventura, terror o fantasía
crea una función que muestre todos los libros 
Crea una función que muestre todos los libros
crea una función que muestre todos los autores ordenados alfabeticamente
Crea un afunción qu pida un genero y muestre la información de los libros que pertenezcaan a ese genero usando el método que devuelve la función*/ 
class Libro{
    constructor(titulo,autor,anio,genero){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.genero=genero;
    }
    getAuthor(){
        return this.autor;
    }
    getGender(){
        return this.genero;
    }

    libros(){
        return `EL libro ${this.titulo} es del${this.autor} del año ${this.anio} y de genero ${this.genero} `
    }
}
let libros=[];
while(libros.length<3){
    let libro=prompt("Escriba un nombre de libro");
    let autor=prompt("Escria el autor del libro");
    let anio=prompt("Escriba el año en el que fue escrito");
    let genero=prompt("Escriba el género del libro").toLowerCase();
    if(libro !='' && autor!= '' && !isNaN(anio) && anio.length==4&& (genero =='aventura' || genero== 'terror'|| genero=='fantasia')){
         libros.push(new Libro(libro,autor,anio,genero));
    }

}
const mostrar =() =>{
    console.log(libros);
}

const mostrarAutores =()=>{
    let authors=[]
    for (const author of libros) {
        authors.push(author.getAuthor());
    
    }
    console.log(authors.sort());
}

const mostrarGenero =() =>{
    const gender = prompt("Introduce el género a buscaar");
    for (const book of libros){
        if( book.getGender()==gender){
            console.log(book.libros())
        }
    }
}
mostrar();
mostrarAutores();
mostrarGenero();