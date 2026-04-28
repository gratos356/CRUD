export const destroy = (url) =>{
    fetch(`http://localhost:3000/${url}`,{
        method: "DELETE",
    })

}