import { update } from "../helpers/index.js";

export const updateTask = async(id,title,state) =>{
    await update('tasks', id, { 
            title: title, 
            completed: state 
        });
}