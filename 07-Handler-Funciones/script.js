/* 
Handler - Funciones 

El handler en un evento es una funciónque se ejecuta cuando el evento ocurre.
Hay 3 formas den escribir la función Handler

1. Cómo una función externa 
2. Cómo una función anónima
3. Cómo una función flecha

Función externa 
  Esta funcón se escribe por fuera del evento y pasa como argumento al addEventListener.
  
function handler(){
  // código a ejecutar 
}

elemento.addEventListener
(tipoEvento , handler)

FUnción anónima
  se escribe dentro del evento y no tiene nombre.

  elemento.addEventListener(tipoEvento , funcion() {// Codigo que se ejecuta } );

Funcion flecha 
  Se escribe dentro delevento, no tiene nombre, pero es mas concisa

elemento.addEventListener(tipoEvento, () => {//codigo a ejecutar})

*Cuando el codigo a ejecutar el código que se ejecuta tiene más de una linea, se debe escribir entre las llaves

*Si enl código que se ejecuta, solo tiene una  linea se pueden omitir llaves.
*/

// Referencias

const externa = document.getElementById("externa");
const anonima = document.getElementById("anonima");

// Funcion externa

function functionExternal() {
  console.log("Click en el botón externo")
};

externa.addEventListener(`click` , functionExterna);

// Función anónima

anonima.addEventListener(`click` , function(){
  console.log("click en el boton anonima");
})

// Funcion flecha 

flecha.addEventListener(`click`, () => {
  console.log("Click en el boton flecha ")
});