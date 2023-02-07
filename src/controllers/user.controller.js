export async function userAccount(data,method) {
    return await fetch(`http://localhost:2000/user/${method}`,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then( response => response.json()).
    then(json => {
        console.log(json)
        return json
    }).
    catch(error => console.log(error))
}