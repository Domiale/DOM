// Accede al primer elemento de la lista

const botanas = document.getElementsByTagName("li");

/* 
Propiedad clasisList
  Accedemos a la losya de clases que tiene un elemento.

    elemento.classList
  Devuelve un DOM Token List (Listado de clases en el DOM) en el tipo array
*/

console.log(botanas[0].classList);
console.log(botanas[0].classList[0]);
//Acceso a clases a traves de su indice 

/* 
Agregar clases
  Para agragar clases usamos el metodo add()

    elemento.classList.add(clase)
  Nombre de la clase para como string "" o ''
*/

botanas[1].classList.add("bg-ligthpink");

/* 
verificar si existe una clase en un elemento con el emtodo contains()

  elemento.classList.contains(clase)

-Devuelve true si existe la clase
-Devuelve false si no existe la clase.
-La clase pasa comoo string entre "" o ''
*/

console.log(botanas[2].classList.contains("botana"));
console.log(botanas[2].classList.contains("bg-lightblue"));

/* 
Para eliminr una clase usamos el método remove()

  elemento.classList.remove(clase)

-La clase pasa como un string entre "" o ''
*/

botanas[3].classList.remove("bg-ligthpink");
botanas[3].classList.remove("botana");