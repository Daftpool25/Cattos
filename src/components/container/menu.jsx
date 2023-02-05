import React from 'react';
import dashboard from "../../images/dashboard.svg"
import table from "../../images/table.svg"
import linkedin from "../../images/linkedin.svg"
import git from "../../images/github.svg"
import arrow from "../../images/arrow.svg"
import { useNavigate } from 'react-router-dom';


function Menu() {

  const navigate=useNavigate()

  return (
    <div id="sideBarContainer">
        <div className="iconsContainerBar">
            <img onClick={() => navigate("/")} width="48px" src={dashboard} alt="dashboardMenuIcon" />
            <img width="48px" src={table} alt="tableMenuIcon" />
            <img width="48px" src={git} alt="gitMenuIcon" />
            <img width="48px" src={linkedin} alt="linkMenuIcon" />
            <hr width="80%" color='white'/>
            <img src={arrow} alt="displayMenuIcon" />

        </div>
    </div>
  )
}

export default Menu