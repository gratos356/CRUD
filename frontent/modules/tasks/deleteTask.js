import { destroy  } from "../helpers/index.js";

export const TrashTask = async(title,id)=>{

    await destroy(`tasks/${id}`);

    alert(`Tarea ${title} eliminada correctamente`)
}