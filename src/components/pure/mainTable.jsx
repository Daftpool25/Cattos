import React, { useEffect, useState } from 'react'
import edit from "../../images/edit.svg"
import remove from "../../images/delete.svg"
import add from "../../images/add.svg"
import search from "../../images/search.svg"
import arrows from "../../images/arrows.svg"
import { useNavigate } from 'react-router-dom'




function MainTable({data}) {

    const [searchValue, setSearchValue] = useState("")
    let columnState=-1;

    useEffect(() => {
        console.log(data)
    }, [data])
    
    function sortRows(column, type){
        const table=document.getElementById("mainTable").querySelector("tbody");
        const rows=[...table.querySelectorAll("tr")];

        if(type==="int"){
            rows.sort((a,b) =>{
                
                    let valA=Number(a.querySelectorAll("td")[column].innerText);
                    let valB=Number(b.querySelectorAll("td")[column].innerText);
    
                    return valA-valB;
                })
        }

        if(type==="string"){
            rows.sort((a,b) =>{
                
                let valA=a.querySelectorAll("td")[column].innerText.toLowerCase();
                let valB=b.querySelectorAll("td")[column].innerText.toLowerCase();
                
                if (valA > valB) {
                    return 1;
                  }
                  if (valA < valB) {
                    return -1;
                  }
                  return 0;

                })
        }


        if(columnState ==column){
            rows.reverse();
            columnState=-1
        }else{
            columnState=column
        }

        table.innerHTML="";
        rows.forEach(item =>{
            table.insertAdjacentHTML("beforeEnd", item.innerHTML)
        })
    }

    function onSearch() {
        
        let td; let i; let txtValue;

        const table=document.getElementById("mainTable").querySelector("tbody");
        const rows=[...table.querySelectorAll("tr")];
        let filter=searchValue.toUpperCase();
       
        for ( i = 0; i < rows.length; i++) {
            const td = rows[i].querySelectorAll("td")[0];

            if(td){
                txtValue=td.textContent || td.innerText;
                if(txtValue.toUpperCase().indexOf(filter) > -1){
                    rows[i].style.display=""
                } else{
                    rows[i].style.display="none"
                }
            }
        }
    }

    const navigate = useNavigate()

  return (
    <div className="divMainTable">
        <div className='headerSearch'>
            <div>
                <span>Workers</span>
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder='Write a name...'/>
                <button onClick={onSearch}><img src={search} className="click" alt="findImg" /></button>
            </div>
            <button onClick={() => navigate("/addUser")} ><img src={add} alt="add" className="click"/> Add new profile</button>
        </div>
    {data.length>0?
    <table className="mainTable" id="mainTable">
        <thead>
        <tr>
            <th className="click" onClick={()=>sortRows(0,"string")}>Name<img src={arrows} width="10px" alt="sortImg" /></th>
            <th className="click" onClick={()=>sortRows(1,"string")}>Last Name<img src={arrows} width="10px" alt="sortImg" /></th>
            <th className="click" onClick={()=>sortRows(2,"string")}>Email<img src={arrows} width="10px" alt="sortImg" /></th>
            <th className="click" onClick={()=>sortRows(3,"int")}>Passport<img src={arrows} width="10px" alt="sortImg" /></th>
            <th className="click" onClick={()=>sortRows(4,"int")}>Level<img src={arrows} width="10px" alt="sortImg" /></th>
            <th className="click" onClick={()=>sortRows(5,"int")}>Start Date<img src={arrows} width="10px" alt="sortImg" /></th>
            <th onClick={()=>sortRows(6)}>Skills</th>
            <th onClick={()=>sortRows(7)}>Actions:</th>
        </tr>
        </thead>
        <tbody>
        {data.map( (item,i) => {
            
         return (<tr key={i}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.passport}</td>
                {item.level===1 && <td >Worker</td>}
                {item.level===2 && <td >Junior</td>}
                {item.level===3 && <td>Admin</td>}
                <td>{item.createdAt}</td>
                <td className="skillsColumns"><div>{
                     item.skills.split(",").map(
                        element => <span>{element}</span>
                     )
                }</div></td>
                <td className="actionsIcons">
                    <img  src={edit} alt="edit" />
                    <img  src={remove} alt="delete" />
                </td>
            </tr>)
            
        })
        }
        </tbody>
    </table>
    :
    <h1>Wait...</h1>
    }
    </div>
  )
}

export default MainTable