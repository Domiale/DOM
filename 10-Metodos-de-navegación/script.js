/* Metodos de navegacion 
  Nos permiten movernos entre los elementos relacionados en el DOM 
*/

// Referencias

const padre = document.
getElementById("parent");

const hijo = document. 
getElementById("child");

const hermano = document.
getElementById("sibling");

// parentNode -> devuelve el nodo padre del elemento

console.log(hijo.parentNode);

/* chileNode ->
  Devuelve una coleccion (Node list) de todos los nodos hijos, incluyendo elementos, textos y comentarios
*/

console.log(padre.childNodes);

/* Children -> Devuelve una coleccion (HTML Collection) de los nodos hijos que son elementos. Ignora nodos de texto o comentarios
 */

console.log(padre.children);

/* firstChild -> Devuelve el primer nodo hijo, puede ser un nodo de texto, comentario o elemento
 */

console.log(padre.firstChild);

/* firstElementChild -> Envuelve el primer nodo hijo, sea un elemento*/

console.log(padre.firstElementChild);

/* lastiChild -> devuelve el ultimo nodo hijo, puede ser nodo de texto, comentario o elemento */

console.log(padre.lastChild);

/* lastElementChild -> Devuelve el ultimo nodo hijo que sea un elemento*/

console.log(padre.lastElementChild);

/* nextsibling -> devuelve el siguiente nodo hermano, puede er nodo de texto, comentario o elemento */

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

/* nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento */

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

/* previusSibling -> Devuelve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento */

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

/* previusElementSibling -> Devuelve el anterior nodo hermano que sea un elemento */

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);