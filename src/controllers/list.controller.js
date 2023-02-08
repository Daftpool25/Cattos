
export async function getTableData() {
    return await fetch('http://localhost:2000/usersList').
    then(response => response.json()).
    then(json =>  json).
    catch(error => alert(error))
}
export async function addUser (data){
  return await fetch("http://localhost:2000/usersList",{
    method:"POST",
    body:JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => response.json()).
  then(json => console.log(json))
}

export async function editUser (data){
  await fetch("http://localhost:2000/usersList",{
    method:"PUT",
    body:JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => response.json()).
  then(json => console.log(json))
}

export async function deleteUser (id){
  await fetch(`http://localhost:2000/usersList/${id}`,{
    method:"DELETE"
  }).then(response => response.json()).
  then(json => console.log(json))
}
