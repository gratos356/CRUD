export const update = async (endPoint, id, data) =>{
    const response = await fetch(`http://localhost:3000/${endPoint}/${id}`,{
        method: "PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });
    return await response.json();
}