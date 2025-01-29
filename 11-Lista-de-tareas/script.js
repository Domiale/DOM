// Referemcias 

const taskImput = document.getElementById("taskImput");
const addButton = document.getElementById("addButton")

// Escuchador

addButton.addEventListener("click" , createTask );

// Funcion manejadora

function createTask () {
  if (taskImput.value){
    console.log(taskImput.value);
    taskImput.value = ""; // regresamos el valor vacio  a Imput
  } else {
    alert("Hey, escribeme una tarea");
  }
  }
 
