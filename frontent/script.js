const taskForm = document.querySelector("#taskForm");
const inputTask = document.querySelector("#inputTask");

const SectionShowTasks = document.querySelector("#SectionShowTasks")

import { createTask , getTasks , TrashTask} from "./modules/tasks/index.js";



function FuncionMostrarTareas(task) {
        const TaskMesage = document.createElement("div")
        const li = document.createElement("li");
        const Delete = document.createElement("i")
        const MesageContain = document.createElement("div")
        const DeleteContain = document.createElement("div")

        Delete.classList.add("bx-trash")
        TaskMesage.classList.add("tasksShow")
        DeleteContain.classList.add("trash")
        MesageContain.classList.add("mesage")

        li.textContent = task.title; 
        
        MesageContain.appendChild(li)
        DeleteContain.appendChild(Delete)
        TaskMesage.appendChild(MesageContain)
        TaskMesage.appendChild(DeleteContain)
        SectionShowTasks.appendChild(TaskMesage);

        DeleteContain.addEventListener("click", (a)=>{
            a.preventDefault();
            TrashTask(task.title,task.id);
            SectionShowTasks.removeChild(TaskMesage);
            
        });
}

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

    const mostrarTareaCreada = async ()=>{
        const tasks = await getTasks();
        tasks.forEach(task => {
            FuncionMostrarTareas(task);
        });
    }
    mostrarTareaCreada()
});

const mostrarTareas = async () => {
    const tasks = await getTasks();
    
    // Usamos .slice(0, 5) para tomar solo los primeros 5 elementos del array
    // const tareasLimitadas = tasks.slice(0, 5);
    
    SectionShowTasks.innerHTML = '';
    // console.table(tareasLimitadas);
    
    // const lista = document.getElementById('lista-tareas');
    tasks.forEach(task => {
        FuncionMostrarTareas(task);
    });


}
mostrarTareas();





