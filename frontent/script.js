const taskForm = document.querySelector("#taskForm");
const inputTask = document.querySelector("#inputTask");


import { createTask } from "./modules/tasks/index.js";

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






