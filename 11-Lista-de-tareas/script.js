// Referemcias 

const taskImput = document.getElementById("taskImput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Escuchador

addButton.addEventListener("click" , createTask );

// Funcion manejadora

function createTask () {

  if (taskImput.value){
   
    //Creamos el contenedor de una tarea 
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

    //Escuchadores de los iconos 
    iconCheck.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.toggle("complete");
    })
    
    //DEfinir escuchar al elemento iconDelete
    iconDelate.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove()
    })

    taskImput.value = ""; // regresamos el valor vacio  a Imput
  } else {
    alert("Hey, escribeme una tarea");
  }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  })