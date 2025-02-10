// Referemcias 

const taskImput = document.getElementById("taskImput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Escuchador

addButton.addEventListener("click" , createTask );

// Funcion manejadora

function createTask () {
  if (taskImput.value){
    console.log(taskImput.value);

    const taskItem = document.createElement("div");

    taskItem.classList.add("task");

    //Creamos un parrafo para la tarea 
    const taskText = document.createElement("p");
    taskText.innerText = taskImput.value;

    //Creamos el contenedor de los iconos 
    const taskIcons = document.createElement("div");
    taskIcons.classList.add("task-icons");

    //crear el icono check
    const iconCheck = document.createElement("i");
    iconCheck.classList.add("bi", "bi-check", "icon-complete");

    //crear el icono trash
    const iconDelate = document.createElement("i");
    iconDelate.classList.add("bi", "bi-trash", "icon-delete");

  //Estructura de los elementos
  taskIcons.append(iconCheck, iconDelate);
  taskItem.append(taskText, taskIcons);
  taskList.append(taskItem);

    taskImput.value = ""; // regresamos el valor vacio  a Imput
  } else {
    alert("Hey, escribeme una tarea");
  }
  }
 
