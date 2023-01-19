import React from 'react'

function TableFilter() {
  return (
    <div className='tableFilterContainer'>
        <p className='filterTittle' >Search Filter</p>
        <div>
          <p>Skills</p>
          <input type="text" className="filterInput" placeholder='Search a Skill Tag'/>  
          <div className="tagsContainer">
            <span>Chinesse</span>
            <span>French</span>
            <span>UI</span>
            <span>AI</span>
          </div>    
        </div>
        <div>
          <p>City</p>
          <input className="filterInput" type="text" placeholder='Write to search by city' />
        </div>
        <div>
          <p>Salary</p>
          <input className="filterInput" type="numbers" placeholder='Search by salary' />
        </div>
        <div>
          <p>Connection status</p>
          <div className="formElement" ><input  id="Connected" type="checkbox" /><label  for="Connected">Connected</label></div>
          <div className="formElement" ><input id="Disconnected"  type="checkbox" /><label for="Disconnected">Disconnected</label></div>
        </div>
        <div>
          <p>Level</p>
          <div className="formElement" ><input id="Worker" type="checkbox" /><label for="Worker">Worker</label></div>
          <div className="formElement" ><input id="Junior" type="checkbox" /><label for="Junior">Junior</label></div>
          <div className="formElement" ><input id="Admin" type="checkbox" /><label for="Admin">Admin</label></div>
        </div>
    </div>
  )
}

export default TableFilter