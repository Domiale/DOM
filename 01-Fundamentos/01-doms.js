/* 
DOM
  organiza los elementos del documento en "nodos" en un arbol jerárquico.

  Nodo -> Todo elemento individual de nuestro documento.

Tipos de nodo 
  1. Nodo de Documento
  2. Nodo de Elemento
  3. Nodo de Atributo
  4. Nodo de Texto
  5. Nodo de Comentarios 
*/

/* 
Nodo de Documento
  Este nodo representa el documento completo html.
  Incluye el contenido desde la "raiz" - root, hasta los elementos hijos.

Para acceder usamos 
  -> document
*/

console.log(document);
console.log(document.head);
console.log(console.body);
console.log(document.title);
console.log(document.URL);

/* 
Nodo Elemento
  Para seleccionar nodos de elementos, usamos:
  getElementByTagName()

  Se escribe despúes del nodo "document"
*/

//let title = document.getElementsByTagName("p");
//console.log(title);

/* 
Nodos de Atributo
  Son los nodos que ccedemos a traves de su clase o de su id 
  
  getElementById("nombreId")
  getElementByClassName("NombreslClase")

  querySelector("nombreSelector") -> Selecciona el primer elemento que encuentre con el Selector

  querySelectorAll("nombreSelector") -> Seleccionar todos los elementos con el mismo selector
*/

/* let title = document.getElementById("title")

console.log(title);
console.log(title.innerText);
console.log(title.id);

let text = document.getElementsByClassName("paragraph");

console.log(texts);
console.log(texts[0].text.Content);
console.log(texts[1].text.Content); */

//let titulo = document.querySelector("h1"); //Tag
//let titulo = document.querySelector("#title");//Id
let titulo = document.querySelector(".title"); // Class

console.log(titulo)

//let parrafos = document.querySelectorAll("p"); //Tag
//let parrafos = document.querySelectorAll("#paragrap");
let parrafos = document.querySelectorAll(".paragraph"); //Class

console.log(parrafos);

/* 
Nodo de Texto
  Son los elementos de texto contenidos en las etiquetas de los html.

  .innerText
  .textContent
*/

let subtitle = document.querySelector(".subtitle");

console.log(subtitle.innerText);
console.log(subtitle.textContent);

/* 
Nodos de Comentarios
  Tienen el valor de 8 dentro del DOM
*/

let comentario = document.COMMENT_NODE;
console.log(comentario);