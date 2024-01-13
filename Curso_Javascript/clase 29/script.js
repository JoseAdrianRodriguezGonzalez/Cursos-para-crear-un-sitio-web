//Recorrer el DOM(DOM traversing)
/*
Padre - parent(nodo del que desciende)
-parentNode - devuelve el nodo padre (que puede no ser un eleemnto)
-parentElemente - Devuelve el nodo elemento padre

NOTA
Los nodos del tipo Document y DocuemtnFragement nunca va a tener un eleemento padre, parentNode devoleverá siempre null
Hijos - child( nodo que desciende de un padre)
- childNodes - Devuelve todos los  nodos hijos
- children- devuelve todos los nodos hijos
-firstChild - Devuelve el primer nodo hij
-firstElementChild - Devuelve el primer nodo elemento hijo
-lastChild- Devuelve el último nodo hijo
-lastElementChild -- Devuelve el último nodo elemento hijo
-hasChildNodes()-devuelve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (nodo al mismo nivel)
-nextSibling - Devuelve el siguiente nodo hermano
-nextElementSibling
-previousSibling
-previousElmentSibling

Cercano
-Closest(Selecotr )- sSelecciona el nodo más cercano que cumplka con el selector, aún es experimental.
*/
const parent =document.getElementById('parent');
/*
 console.log(parent.childNodes);
 console.log(parent.children);
 console.log(parent.firstChild);
 console.log(parent.firstElementChild);
 console.log(parent.lastChild);
 console.log(parent.lastElementChild);
 console.log(parent.hasChildNodes());

 *//*
 console.log(parent.nextSibling);
 console.log(parent.parentElement.nextElementSibling);
 */
 console.log(parent.parentElement.previousSibling);
 console.log(parent.parentElement.previousElementSibling);