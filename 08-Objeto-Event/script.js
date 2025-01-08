/* 
  Ocurre en el navegador

  Para acceder al objeto event (e) se psaa automaticamente (e) se pasa automanticamente como un argumento a la funcion manejadora 

Sintaxis 
  funcion funcionManejadora (event) {
    //codigo a ejecutura....
    console.log(event) // Muestra la lista de propiedades y metodos
  }

Propiedades del objeto event:
  * type: devuelve el tipo de evento
  * target: devuelve el elemento donde ocurre el evento 
  * timeStamp: Devuelve la marca de tiempo en milisegundos desde la carga de la pagina 

  * code: devuelve el código de la tecla presionada
  * key: Devuelve el valor de la tecla presionada
*/

const button = document.getElementsByClassName("button");
//console.log(button[0]);

button[0].addEventListener("click", mostrarObjetoEvento);

// Accedemos al objeto evento 
function mostrarObjetoEvento(event) {
  // codigo que se ejecuta 
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText)
}

document.addEventListener("keydown" , function(e){
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
})

document.addEventListener("mousemove", (e) => {
 console.log(e);
 console.log("Cord x: " + e.clientX + " Cord Y: " + e.clientY);
});