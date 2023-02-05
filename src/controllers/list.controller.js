
export async function getTableData() {
    return await fetch('http://localhost:2000/usersList').
    then(response => response.json()).
    then(json =>  json).
    catch(error => alert(error))
  }