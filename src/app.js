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
import { addUser, deleteUser, getTableData } from './controllers/list.controller';
import AddUserForm from './components/pure/addUserForm';
import EditUserForm from './components/pure/editUserForm';
import { types } from './utils/actions';
import { userAccount } from './controllers/user.controller';

//TODO subir imagenes y paginacion
//TODO Filtro derecho y (localstorage)
//TODO menu derecho
//todo pagina generall charts, personal charts
//TODO STATE Controller


export const userContext =React.createContext(null)

function App() {

  //! STATES
  const [row,setRow] = useState("")
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    getTableData().then( item => setTableData(item))
  }, [])

  const initialState= {user:"",token:"",auth:false}

  //!DATATABLE HANDLER
  async function addUserToTable(name,lastname,email,password,passport,city,level,salary,skills) {
    let object ={name,lastname,email,password,passport,city,level,salary,skills}
    await addUser(object)
    await getTableData().then( item => setTableData(item))
  }

  function selectUser(id) {
    const user = tableData.find(item => item.id===id)
    setRow(user)
  }

  function requesToEdit(){

  }

  async function onClickDelete(id) {
    await deleteUser(id)
    await getTableData().then( item => setTableData(item))

  }

  //!DISPATCH FUNCTIONS
  function setUserData(data){
    dispatch({
      type:types.SET_USER_DATA,
      payload:{
        user:data.user,
        token:data.token
      }
    })
  }

  function login(email,password){
     dispatch({
      type:types.LOGIN,
      payload:{
          email,
          password
      }
    })
}

  //!REDUCER

  const reducer = (state,action) =>{
    const { name,lastname,email,password,passport,city,level,salary,skills,photo,cv}=action.payload

    switch (action.type) {
      case types.LOGIN:
        let dataFromLoginForm={email,password}
        
        userAccount(dataFromLoginForm, "login").then( data => setUserData(data.message))
        return {...state};

      case types.REGISTER:
        let dataFromRegisterForm={name,lastname,email,password,passport,city,level,salary,skills,photo,cv}

        userAccount(dataFromRegisterForm,"register").then(data => setUserData(data.message))       
        return {...state};

      case types.SET_USER_DATA:
        const {user,token}=action.payload
        console.log(user)
        return {...state,user:user,token:token,auth:true};  
      
      default:
        break;
    }
  }

  //!USE REDUCER
  const [state, dispatch] = useReducer(reducer, initialState)

  

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
                        <Route exact path='/' element={state.auth? <Home data={tableData} onClickDelete={onClickDelete} selectUser={selectUser}/>:<Login login={login}/>}/>
                        <Route path='/login' element={<Login login={login}/>}/>
                        <Route path='/register' element={
                            <Register
                                registerUser={(
                                    name,
                                    lastname,
                                    email,
                                    password,
                                    passport,
                                    city,
                                    level,
                                    salary,
                                    skills,
                                    photo,
                                    cv
                                ) =>{
                                  dispatch({
                                    type:types.REGISTER,
                                    payload:{
                                      name,
                                      lastname,
                                      email,
                                      password,
                                      passport,
                                      city,
                                      level,
                                      salary,
                                      skills,
                                      photo,
                                      cv
                                    }
                                  })
                                }}
                            />
                        }/>

                        <Route path='/my-account' element={state.auth? <MyAccount/>:<Login login={login}/> }/>

                        <Route path='/user/:name' element={state.auth? <Profile user={row}/>:<Login login={login}/> }/>
                        <Route path='/addUser' element={state.auth? <AddUserForm addUser={addUserToTable}/>:<Login login={login}/>}/>
                        <Route path='/editUser/:name' element={state.auth? <EditUserForm userToEdiT={row}/> :<Login login={login}/>}/>
                   
                    </Routes>
                  </main>
            </div>
          </div>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App