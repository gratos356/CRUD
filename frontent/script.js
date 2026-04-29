const taskForm = document.querySelector("#taskForm");
const inputTask = document.querySelector("#inputTask");

const SectionShowTasks = document.querySelector("#SectionShowTasks")

const SectionUpdateTask = document.querySelector("#updateTaskForm")
const UpdateID = document.querySelector("#taskInputUpdateId")
const UpdateTitle = document.querySelector("#taskInputUpdateTitle")
const UpdateState = document.querySelector("#taskInputUpdateState")
const UpdateButton = document.querySelector("#updateBttn")


import { createTask , getTasks , TrashTask , updateTask} from "./modules/tasks/index.js";



function FuncionMostrarTareas(task) {
        const TaskMesage = document.createElement("div");
        const li = document.createElement("li");
        const liID = document.createElement("li");
        const Delete = document.createElement("i");
        const MesageContain = document.createElement("div");
        const DeleteContain = document.createElement("div");
        const informationContain = document.createElement("div");
        const liEstado = document.createElement("li");

        Delete.classList.add("bx-trash");
        TaskMesage.classList.add("tasksShow");
        DeleteContain.classList.add("trash");
        MesageContain.classList.add("mesage");
        informationContain.classList.add("information")

        li.textContent = task.title; 
        liID.textContent =`id:${task.id}`;
        liEstado.textContent =`completada:${task.completed}`;

        informationContain.appendChild(liID);
        informationContain.appendChild(liEstado);
        MesageContain.appendChild(li);
        MesageContain.appendChild(informationContain);
        DeleteContain.appendChild(Delete);
        TaskMesage.appendChild(MesageContain);
        TaskMesage.appendChild(DeleteContain);
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
    

    
    SectionShowTasks.innerHTML = '';

    

    tasks.forEach(task => {
        FuncionMostrarTareas(task);
    });
    

}
mostrarTareas();

SectionUpdateTask.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const newTitle = UpdateTitle.value.trim();
    const newStateValue = UpdateState.value; 
    const IdUpdate = UpdateID.value.trim();
    
    const state = (newStateValue === "Completado"); 

    console.log("Enviando al servidor:",IdUpdate,newTitle,state);

    await updateTask(IdUpdate, newTitle, state);
    

    await ActualizarTareas(); 
    

    e.target.reset(); 
});

const ActualizarTareas = async () => {
    const tasks = await getTasks();
    SectionShowTasks.innerHTML = ''; 
    
    tasks.forEach(task => {
        FuncionMostrarTareas(task);
    });
};


ActualizarTareas();




