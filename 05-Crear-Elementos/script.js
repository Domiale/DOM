// Obtener un elemento de referencia 

const movies = document.getElementById("movies");

/* 
Crear un nuevo elemento usamos createElement

  document.createElement(tipoElemento)

-El tipo de elemento pasa como sring "" o ''
-Se debe guardar en una variable o constante
*/

const newMovie = document.createElement("li");

/* 
Agregamos el elemento al DOM desde la referencia usamos el meyodo append()

  elementoReferencia.append(nuevoElemento)

-El nuevo elemento no pasa como string 
*/

movies.append(newMovie)

/* 
Agregamos texto al nuevo elemento con innerText
  elemento.innerText = valor
-Valor pasa con string "" o ''
*/

newMovie.innerText = "Piratas del caribe";

/* 
Agregamos las clases al nuevo elemento con el metodo add()
  elemento.classList.add(clase)

-La clase pasa como String
-El metodo acepta más de un parametro separandolos con comas , 
*/

newMovie.classList.add("list-item" , "bg-two");

// Nuevo elemento (reto)

const nuevaPeli = document.createElement("li");
movies.append(nuevaPeli);
nuevaPeli.innerText = "Boku no Hero";
nuevaPeli.classList.add("list-item" , "bg-one");