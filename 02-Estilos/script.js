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

/* 
Metodo de Propiedad
  Asignar el valor de la propiedad de estilo en el elemento seleccionado

    elemento.style.nombrePropiedad = "Valor"

  - Forma más directa y legible de asignar propiedades
  - Solo admite asignar propiedades con formato CamelCase
*/

titulo.style.color = "red";
titulo.style.backgroundColor = "pink";

console.log("valores asignados con JS. Color:" + titulo.style.color + " -Fondo: " + titulo.style.backgroundColor); 

/* 
Metodo detProperty()
  Asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)

  -Más flexible y poderoso.
  -Las propiedades se escriben en formato kebab-case.
  -Parametro "important" es opcional 
*/

titulo.style.setProperty("color", "orange")
titulo.style.setProperty("background-color", "red", "important");

console.log("valores asignados con setProperty. -Color:" + titulo.style.color + " -Fondo:" + titulo.style.backgroundColor); 

/* 
Eliminar valores de propiedades
  Usamos el metodo de propiedad y le definimos una cadena de texto vacia

    elemento.style.nombrePropiedad = ""

  Esto elimina los valores previamente definidos en JS y en los estilos en línea
*/

// titulo.style.color = "";
// titulo.style.backgroundColor = "";

/* 
Metodo removeProperty()
  Relimina la propiedad del estilo.

    elemento.style.removeProperty(nombre-propiedad)

  - Las propiedades se pasan en formato kebab-case
*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");