import React from 'react'

function Login() {
  return (
    <div className='login'>
      <div className="loginContainer">
          <div className='divLogin'>
            <form onSubmit={() => console.log("hi")} >
              <h1>Login</h1>
              <input placeholder='youEmail@example.com' type="email" />
              <input placeholder='Password' type="password" />
              <button type='submit'>Login</button>
              <p>or register...</p>
            </form>
          </div>
      </div>
      <div className="imagenContainer">

      </div>

    </div>
  )
}

export default Login