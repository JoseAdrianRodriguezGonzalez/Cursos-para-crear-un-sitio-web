let opcion= prompt("¿Qué figura quiere sacar el área? \ntriangulo\nrectangulo\ncirculo");
let h,h1,b,b1,r,resultadot,resultador,resultadoc;
const pi =3.1416;
switch(opcion){
    case 'triangulo':
        b=prompt("¿Qué base quiere?");
        h=prompt("¿Qué altura quiere?");
        resultadot=(b*h)/2;
        console.log(`La área del triángulo es igual a ${resultadot}`);
        break;
    case 'rectangulo':
        h1=prompt("¿Qué altura quiere?");
        b1=prompt("¿Qué base quiere?");
        resultador=b1*h1;
        console.log(`EL área del rectángulo es ${resultador}`);
        break;
    case 'circulo':
        r=prompt("¿De cuánto e el radio de tu circulo");
        resultadoc=Math.pow(r,2)*Math.PI;
        console.log(`El área de su circulo es igual a ${resultadoc}`);
        break;
        default:
            console.log(`La ${opcion} no es valida`);
            break;   
    }
    