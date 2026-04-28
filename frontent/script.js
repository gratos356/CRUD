const taskForm = document.querySelector("#taskForm");
const inputTask = document.querySelector("#inputTask");

const SectionShowTasks = document.querySelector("#SectionShowTasks")

import { createTask , getTasks} from "./modules/tasks/index.js";

taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const valueInput = inputTask.value.trim();

    if (valueInput===""){
        // const formError = document.querySelector(".InputTitleTask");
        inputTask.classList.add("formError");
        alert("deve llenar el todos los campos");
        return;
    }
    createTask(inputTask.value);
    
});

const mostrarTareas = async () => {
    const tasks = await getTasks();
    
    // Usamos .slice(0, 5) para tomar solo los primeros 5 elementos del array
    const tareasLimitadas = tasks.slice(0, 5);
    
    console.table(tareasLimitadas);
    
    // const lista = document.getElementById('lista-tareas');
    SectionShowTasks.innerHTML = '';

    tareasLimitadas.forEach(task => {
        const li = document.createElement('li');
        li.classList.add("tasksShow")
        li.textContent = task.title; 
        SectionShowTasks.appendChild(li);
    });
}
mostrarTareas();





