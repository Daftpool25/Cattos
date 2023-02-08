import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({login}) {

  const email = useRef("")
  const password =useRef("")
  const navigate= useNavigate()

  return (
    <div className='login'>
      <div className="loginContainer">
          <div className='divLogin'>
            <form onSubmit={
              (e)=>{
                e.preventDefault()
                let emailValue=email.current.value;
                let passwordValue=password.current.value;
                login(emailValue,passwordValue)
              }
            } >
              <h1>Login</h1>
              <input ref={email} placeholder='your-email@example.com' type="email" />
              <input ref ={password} placeholder='Password' type="password" />
              <button type='submit'>Login</button>
              <p onClick={() => navigate("/register")}>or register...</p>
            </form>
          </div>
      </div>
      <div className="imagenContainer">

      </div>

    </div>
  )
}

export default Login