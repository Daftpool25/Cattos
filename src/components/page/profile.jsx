import React from 'react'
import profile from "../../images/profileExample.png";
import edit from "../../images/edit.svg";
import remove from "../../images/delete.svg";
import cv from "../../images/cv.svg";

//TODO edit and delte buttons, imag and cv

function Profile({user}) {
  return (
    <div id='myAccount'>
      <div className='personalDataContainer'>
          <img id="profilePhoto" src={profile} alt="profile" />
          <div>
              <div><span  className="tittle">Name: </span><span>{user.name}</span></div>
              <div><span  className="tittle">LastName: </span><span>{user.lastname}</span></div>
              <div><span  className="tittle">Email: </span><span>{user.email}</span></div>
              <div><span  className="tittle">Passport: </span><span>{user.passport}</span></div>
          </div>
          <div className="btnContainer">
            <button id='editBtn'><img src={edit} alt="edit" /> Edit</button>
            <button id='deleteBtn'> <img src={remove} alt="edit" /> Delete Profile</button>
          </div>
      </div>
     <div className="noPersonalContainer">
        <div className="workerDataContainer">
              <div><span className="tittle">City: </span><span>{user.city}</span></div>
              <div><span className="tittle">Status: </span><span>{user.status? "active":"disconnected"}</span></div>
              <div><span className="tittle">Level: </span>{user.level===1 && <span>Worker</span>}{user.level===2 && <span>Junior</span>}{user.level===3 && <span>Admin</span>}</div>
              <div><span className="tittle">Salary: </span><span>{user.salary}$</span></div>
          </div>
          <div className="skillsDataContainer">
              <div><span className="tittle">Start Date: </span><span>{user.createdAt}</span></div>
              <button id='cvButton'><img src={cv} alt="cv" /> Curriculum</button>
              <div className='badgesContainer'>
                    {user.skills.split(",").map(
                            element => <span className="skillBadge">{element}</span>
                    )}
              </div>
          </div>
     </div>
    </div>
  )
}

export default Profile