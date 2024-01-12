const person ={
    name:'José',
    edad: 29,
    hijos:['Laura','Patrick','Joan','Juan','Pepe']
}/*
console.log(person.name);
console.log(person['name']);
*//*
for (const key in person) {
    console.log(key);
}
for (const key in person) {
    console.log(person[key]);
}*//*
for (const sons of person.hijos) {
    console.log(sons);
}*/
console.log(`Hola ${person.name} tienes ${person.edad} y tus hijos se llaman ${person.hijos.join(',')}`)