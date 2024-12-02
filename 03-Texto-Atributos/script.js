
// Seleccionar los elementos por su id
const titulo = document.getElementById("title");
const lista = document.getElementById("list");

// Se muestran por consola
console.log(titulo);
console.log(lista);

/* 
innerText
  Devuelve un "string" del contenido visible dentro de un elemento

     elemento.innerText
  
  -Excluye los elementos ocultos
  -Excluye los espacios en el Documento 
  -Excluye las etiquetas html
*/

console.log(">>> Con innerText");
console.log(titulo.innerText);
console.log(lista.innerText);

/* 
textContent
  Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.textContent

  -Incluye los espacios
  -Incluye los elementos ocultos
  -Excluye las etiquetas html
*/

console.log(">>> Con textContent");
console.log(titulo.textContent);
console.log(lista.textContent);

/* 
innerHTML
  Devuelve un "string" con la estructura interna de el elemento selecionado 

    elemento.innerHTML
*/

console.log(">>> Con innerHTML");
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 
Modificar el contenido con innerText
  Asignamos el valor al elemento seleccionado.

    elemento.innerText = "string"
*/

titulo.innerText = "❤️ sanrio";
lista.innerText = "Kitty es hola diablo ☠️";

/* 
Modificar el contenido con el textContent
  Asignamos el valor al elemento seleccionado

    elemento.textContent = "strings"
*/

titulo.textContent = "Hello Kitty";
lista.textContent = "cargando...";

/* 
Modificar el contenido con innerHTML
  Asignamos el valor al elemento seleccionado incluyendo las etiquetas HTML

    elemento.innterHTML = "<tag>...</tag>"
*/

titulo.innerHTML = "Amigos con<span>Kitty</span>!";
lista.innerHTML = `<li>Melody</li>
<li class="oculto">Keropi</li>
<li>Pompompuri</li>`;

/* 
getAtribute()
  Devuelve el valor del atributo del elemento.

  elemento.getAttribute(atrubuto)
*/

const enlace = document.getElementsByTagName("a");
console.log(enlace [0].getAttribute("href"));

/* 
removeAttribute()
  Elimina el valor del atributo de un un elemento.

  elemento.removeAttribute(atributo)
*/

enlace[0].removeAttribute("href");
console.log(enlace[0].getAttribute("herf"));

/* 
setAttribute()
  Asigna un atributo y un valor a un elemento.

  elemento.setAttribute(atributo, valor)

  -Sobreescribir un atributo ya declarado
  -Crear un nuevo atributo y su valor
*/

enlace[0].setAttribute("href", "https://www.instagram.com/sanrio/");
console.log(enlace[0].getAttribute("href"));


// Antes
console.log(enlace[0].getAttribute("target"));
enlace[0].setAttribute("target", "_blank");

// Despues
console.log(enlace[0].getAttribute("target"));
