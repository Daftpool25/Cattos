import React from 'react'

function Register() {
  return (
    <div className='login'>
      <div className="loginContainer">
          <div className="divRegister">
            <form onSubmit={() => console.log("hi")} >
              <h1>Register</h1>
              <input placeholder='Name' type="text" />
              <input placeholder='Last Name' type="text"/>
              <input placeholder='Passport' type="numbers"/>
              <input placeholder='Email' type="email" />
              <input placeholder='City' type="text"/>
              <input placeholder='Salary' type="numbers"/>
              <input placeholder='Skills' type="text"/>
              <input placeholder='Password' type="password" />
              <button type='submit'>Register</button>
              <p>I already have a account, login...</p>
            </form>
          </div>
      </div>
      <div className="imagenContainer">

      </div>

    </div>
  )
}

export default Register