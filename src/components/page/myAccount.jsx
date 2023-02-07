import React, { useContext } from 'react';
import profile from "../../images/profileExample.png";
import edit from "../../images/edit.svg";
import remove from "../../images/delete.svg";
import cv from "../../images/cv.svg";
import { userContext } from '../../app';



function MyAccount() {

  const  context = useContext(userContext)

  return (
    <div id='myAccount'>
      <div className='personalDataContainer'>
          <img id="profilePhoto" src={profile} alt="profile" />
          <div>
              <div><span  className="tittle">Name: </span><span>{context.user.name}</span></div>
              <div><span  className="tittle">LastName: </span><span>Fritz</span></div>
              <div><span  className="tittle">Email: </span><span>Acacia@gmail.com</span></div>
              <div><span  className="tittle">Passport: </span><span>34.567.890</span></div>
          </div>
          <div className="btnContainer">
            <button id='editBtn'><img src={edit} alt="edit" /> Edit</button>
            <button id='deleteBtn'> <img src={remove} alt="edit" /> Delete Profile</button>
          </div>
      </div>
     <div className="noPersonalContainer">
        <div className="workerDataContainer">
              <div><span className="tittle">City: </span><span>Montreal</span></div>
              <div><span className="tittle">Status: </span><span>Connected</span></div>
              <div><span className="tittle">Level: </span><span>President</span></div>
              <div><span className="tittle">Salary: </span><span>30.000$</span></div>
          </div>
          <div className="skillsDataContainer">
              <div><span className="tittle">Start Date: </span><span>04/05/1997</span></div>
              <button id='cvButton'><img src={cv} alt="cv" /> Curriculum</button>
              <div className='badgesContainer'>
                  <span className="skillBadge">Spanish</span><span className="skillBadge">English</span><span className="skillBadge">Data Science</span><span className="skillBadge">BigData</span><span className="skillBadge">Design</span>
              </div>
          </div>
     </div>
    </div>
  )
}

export default MyAccount