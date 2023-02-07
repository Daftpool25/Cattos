import React, { useEffect, useReducer } from 'react';
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
import { types } from './utils/actions';
import { userAccount } from './controllers/user.controller';

//TODO manejar el crud de la tabla, abrir usuarios
//TODO subir imagenes y paginacion
//TODO Filtro derecho y registro de usuarios(localstorage)
//TODO menu derecho
//TODO controleers utils models
//todo pagina generall charts, personal charts
//TODO STATE Controller

export const userContext =React.createContext(null)

function App() {

  const [tableData, setTableData] = useState([])
  const initialState= {user:"",token:"",auth:false}

  function setUserData(data){
    dispatch({
      type:types.SET_USER_DATA,
      payload:{
        user:data.user,
        token:data.token
      }
    })
  }

  const reducer = (state,action) =>{

    switch (action.type) {
      case types.LOGIN:

        const {email,password}=action.payload
        let dataFromForm={email,password}
        
        userAccount(dataFromForm, "login").then( data => setUserData(data.message))
        return {...state};

      case types.REGISTER:
        
        return {...state};

      case types.SET_USER_DATA:
        const {user,token}=action.payload
        console.log(user)
        return {...state,user:user,token:token,auth:true};  
      
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getTableData().then( item => setTableData(item))
  }, [])

  

  return (
    <userContext.Provider value={state}>
      <BrowserRouter >
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
                        <Route path='/login' element={<Login 
                          login={
                              (email,password) => dispatch({
                                type:types.LOGIN,
                                payload:{
                                    email,
                                    password
                                }
                              })
                          }/>
                        }/>
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
    </userContext.Provider>
  )
}

export default App