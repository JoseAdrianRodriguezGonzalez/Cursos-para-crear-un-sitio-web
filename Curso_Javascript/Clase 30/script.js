/**
 *Insertar y eliminar elementos
        parent.insertBefore(newElement, referenceElement ) - insertar un elemento antes delelemnto de referencia

        Soporte total
        parent.insertAdjacentElement(position, element)
        parent.insertAdjacentHTML(position, HTML)
        parent.insertAdjacentText(position,text)

        positions: 
        beforebegin - antes de que empiece(hermano anterior)
        afterbegin - despues que empiece (primer hijo)
        beforeend - antes de que acabe(último hijo)
        afterend - después de que acabe (hermano sigiente)

    parent.replaceChild(newChild, oldChild)- remplaza un hiujo por otro
 * 
 * 
 */

const list =document.getElementById('list');
const newElement = document.createElement('LI');
newElement.textContent="I'm a new element"

//list.insertBefore(newElement,list.children[0]);
//list.children[0].insertAdjacentElement("beforebegin",newElement);
//list.insertAdjacentElement("afterbegin",newElement);
//list.insertAdjacentElement("beforeend",newElement);
//list.children[0].insertAdjacentElement('afterend',newElement);
//list.replaceChild(newElement,list.children[0]);
/**
 DOM manipulation convience methods - Jquery like
 https://caniuse.com/#search=jquery-like
 positions:
    positions: 
        parent.before() - antes de que empiece(hermano anterior)
        parent.prepend() - despues que empiece (primer hijo)
        parent.append() - antes de que acabe(último hijo)
        parent.after() - después de que acabe (hermano sigiente)
        child.replaceWith(newchild);
    
 */
//list.children[0].before(newElement);
//list.prepend(newElement);
//list.append(newElement);
//list.lastElementChild.after(newElement);
//list.children[0].replaceWith(newElement);
/**
 Clonar y eliminasr elementos
 element.cloneNode(true|false)-clonar el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos true clona todo el elemento con los hijos, si le pasamos clona solo el elemneot sin hijos
 element.remove()- elimina el nodo del DOM
 element.removeChild(child) - elimina el nodo hijo del DOM
 */
//list.after(list.cloneNode(true));
//list.remove()
//list.removeChild(list.children[1]);