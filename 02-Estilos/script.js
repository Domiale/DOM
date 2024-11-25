//Seleccionar el elemento h1 a través de su clase

const titulo = document.querySelector(".titulo");

/* Mostramos el nodo seleccionado

- Nodo expandido -> <1h>...</h1>
- Nodo abstracto -> h1.title

Algunos navegadores optimizan la representacion de los nodos en la consola (Chrome)
 */
console.log(titulo);

/* 
Objeto Style
  Accedemos a el usando la notación de punto (.)
    elemento.style
  Resultado es CSS Style Declartion. Es una lista que representa todas las propiedades de estilo de un elemento.

  Unicamente muestra el valor de los estilos en línea declarados directamente en el elemento html
*/

console.log(titulo.style)

/* 
Propiedades de estilo 
  Accedemos a las propiedades usando la notacion de punto (.)

    elemento.style.nombrePropiedad

  A diferencia de CSS, las propiedades de estilo en JS las escribimos uasndo el formato camelCase.

    CSS -> background-color(kebab-case)
    JS -> backgroundColor (camelCase)
*/

console.log("Valores en linea. -Color: " + titulo.style.color + " -Fondo: " + titulo.style.backgroundColor)