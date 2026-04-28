import {post} from "../helpers/post.js"

export const createTask = (title) => {
    const newTask = {
        title: title
    }
    post("tasks", newTask);

    alert("¡Tarea creada y asociada con éxito!")
}