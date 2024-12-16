/* 
Eventos 
  Un evento es una acción o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser *Manejados* mediante Javascript

Manejar eventos 
  Significa escribir código que "reaccione" de cierta manera cuando algo suceda. Para manejar eventos es importante conocer algunos conceptos claves.

    1. Target (Blanco)
      El elemento target es el elemento del DOM en el que ocurrio el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.
      target

    2. Event Listener (Escuchador)
      El event listener es el "oido" que esta atento a que ocurra un evento en el elemento específico. Usamos el método addEvenListener para escuchar eventos.

    3. Trigger (Disparador)
      Es simplemente el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario o el sistema para activar el evento 

      *Hacer clic
      *Mover el ratón 
      *Escribir en un input 

    4. Event Handler (Manejador)
      El event handlers es la función que se ejecuta cada vez que ocurre en el evento. Con código JS le decimos que hace el event handler

      *Mostrar un mensaje
      *Cambiar un color
      *Lanzar una alerta

  Sintaxis 
    target.eventListener(trigger , eventHandler)

    - target: elemento donde ocurre el evento.
    - listener: Escucha y detetca el evento 
    - trigger: La acción que ocurre en el evento 
    - handler: La función que se ejecuta al ocurrir el evento 
*/

// Señeccionar el elemento 

const button = document.getElementById("button"); 

//Manejar el evento 

button.addEventListener("click" , mostrarMensaje);

//Definicion de función 
function mostrarMensaje(){
  console.log("Pikame esta");
}