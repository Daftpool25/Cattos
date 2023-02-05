import React, { useEffect } from 'react';
import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
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
import { getTableData } from './controllers/list.controller';
import AddUserForm from './components/pure/addUserForm';

//TODO manejar el crud de la tabla, abrir usuarios
//TODO subir imagenes y paginacion
//TODO Filtro derecho y registro de usuarios(localstorage)
//TODO menu derecho
//TODO controleers utils models
//todo pagina generall charts, personal charts
//TODO STATE Controller


function App() {

  const [tableData, setTableData] = useState([])
  const [state, setState] = useState(true)




  useEffect(() => {
    getTableData().then( item => setTableData(item))
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
                  <img  className="click bigger" src={notification} alt="icon" />
                  <img  className="click bigger" src={message} alt="icon"/>
                  <Link to="my-account">
                  <button className="userBtn" ><img width="27px" src={account} alt="icon"/><span>UserName</span></button>
                  </Link>
                </div>

              </aside>
              <main>
                <Routes>
                    <Route exact path='/' element={<Home data={tableData} />}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/my-account' element={<MyAccount/>}/>
                    <Route path='/user/:name' element={<Profile/>}/>

                    <Route path='/addUser' element={<AddUserForm/>}/>

                    <Route exact path='/user' element={<Home data={tableData} />}/>
                </Routes>
              </main>
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App