import React, { useEffect } from 'react';
import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/page/home';
import Login from './components/page/login';
import Register from './components/page/register';
import MyAccount from './components/page/myAccount';
import Profile from './components/page/profile';
import Menu from './components/container/menu';
import  "./style/style.scss"
import message from "./images/message.svg"
import notification from "./images/notification.svg"
import account from "./images/account.svg"

//TODO manejar el crud de la tabla, abrir usuarios
//TODO subir imagenes y paginacion
//TODO Filtro derecho y registro de usuarios(localstorage)
//TODO menu derecho


function App() {

  const [tableData, setTableData] = useState([])
  const [state, setState] = useState(true)


  async function getTableData() {
    await fetch('http://localhost:2000/API/usersList').
    then(response => response.json()).
    then(json => {
      console.log(json.response);
      setTableData(json.response);
      setState(false)
    })
  }

  useEffect(() => {
    getTableData()
    
  }, [])
  

  return (
   <BrowserRouter>
      <div id="all">
        <div id="sideBar">
            <Menu/>
        </div>
        <div id="allContainer">
            <aside>
                <div className="logoContainers">
                  <h1 id="logo">Cattos</h1>
                </div>
                <div className="btnContainers">
                  <img  className="click bigger" src={notification} alt="icon"/>
                  <img  className="click bigger" src={message} alt="icon"/>
                  <button className="userBtn"><img width="27px" src={account} alt="icon"/><span>UserName</span></button>
                </div>

              </aside>
              <main>
                <Routes>
                    <Route exact path='/' element={<Home data={tableData} />}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/my-account' element={<MyAccount/>}/>
                    <Route path='/user/:name' element={<Profile/>}/>
                    <Route exact path='/user' element={<Home data={tableData} />}/>
                </Routes>
              </main>
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App