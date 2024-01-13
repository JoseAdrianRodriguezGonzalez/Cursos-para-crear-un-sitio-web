/**API DE Date  */
const fecha=new Date();//fecha actual
console.log(fecha);
/**El formato que se sigue para generar fechas es, año, mes, dia y hora, pero hora es con una T mayúscula */
const cumple =new Date('2005-07-24T20:00:00'); 
console.log(cumple)
//Metodos para trabajar con fechas
console.log(fecha.toString());//convierte el objeto fecha a string
console.log(fecha.toDateString());//Devuelve la fecha, sin hora en string
console.log(fecha.toTimeString());//devuelve la hora
console.log(fecha.getMonth());//obtiene el mes, lo devuelve enforma de indiice de arreglo, empezando en 0 con enero
console.log(fecha.getDate());//devuelve el Día actual
console.log(fecha.getFullYear());//devuelve el año