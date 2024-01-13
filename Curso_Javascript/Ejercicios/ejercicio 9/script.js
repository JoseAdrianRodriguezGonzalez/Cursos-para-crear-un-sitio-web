const palabra = prompt("Introduzca una palabra");

let consonante =0;
let vocal=0;

for( let i of palabra){
    switch(i){
        case 'A':
        case 'a':
        case 'E':
        case 'e':                case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            vocal++;
            break;
        default:
            consonante++;
    }
}
console.log(`La cantidad de vocale es de ${vocal} y de consonantes es de ${consonante} y su amaño es de ${palabra.length}`);