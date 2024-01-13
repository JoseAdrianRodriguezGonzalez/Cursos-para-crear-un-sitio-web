//DOM -Crear e insertar elementosa
/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.teextContent = text
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código : document.createDocumetFrgament()
*/
const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const title =document.getElementById('title');
const daysList =document.getElementById('dayList');
const selectDays =document.getElementById('daysSelect');   
/*
const itemList = document.createElement('LI');
itemList.textContent ='Lunes';


daysList.appendChild(itemList);
*/
const fragment = document.createDocumentFragment();//contenedor
for(const day of days){//for que rellena erl array
    const itemList = document.createElement('LI');//Se crea una variable que le da el valor de HTML que queremos
    itemList.textContent =day;//Se escribe en cada iteración el valor fdel array
    fragment.appendChild(itemList);//Se almacena esa parte del código en fragment
}
daysList.appendChild(fragment);//Se escribe en el DOM lo que tendrán los hijos del padre "daysList"

const fragment1 =document.createDocumentFragment();
for (const day of days) {
    const itemlist =document.createElement('OPTION');
    itemlist.textContent=day;
    itemlist.setAttribute('value',day.toLowerCase());
    fragment1.appendChild(itemlist);   
}
selectDays.appendChild(fragment1);