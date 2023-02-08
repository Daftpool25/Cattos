import React, { useRef } from 'react'

function Register({registerUser}) {

  //TODO cambiar el input de los valores deplegables

  const  name = useRef("")
  const  lastname = useRef("")
  const  email = useRef("")
  const  password = useRef("")
  const  passport = useRef("")
  const  city = useRef("")
  const  level = useRef("")
  const  salary = useRef("")
  const  skills = useRef("")
  const  photo = useRef("")
  const  cv = useRef("")

  function sendRegisterForm(e){
    e.preventDefault();

    let nameValue=name.current.value
    let lastnameValue=lastname.current.value
    let emailValue=email.current.value
    let passwordValue=password.current.value
    let passportValue=passport.current.value
    let cityValue=city.current.value
    let levelValue=level.current.value
    let salaryValue=salary.current.value
    let skillsValue=skills.current.value
    let photoValue=photo.current.value
    let cvValue=cv.current.value

      registerUser(
        nameValue,
        lastnameValue,
        emailValue,
        passwordValue,
        passportValue,
        cityValue,
        levelValue,
        salaryValue,
        skillsValue,
        photoValue,
        cvValue
      )
  }

  return (
    <div className='login'>
      <div className="loginContainer">
          <div className="divRegister">
            <form onSubmit={sendRegisterForm}>
              <h1>Register</h1>

              <input ref={name} placeholder='Name' type="text" />
              <input ref={lastname} placeholder='Last Name' type="text"/>
              <input ref={email} placeholder='Email' type="email" />
              <input ref={password} placeholder='Password' type="text" />
              <input ref={passport} placeholder='Passport' type="numbers"/>
              <input ref={city} placeholder='City' type="text"/>
              <input ref={level} placeholder='Level' type="numbers"/>
              <input ref={salary} placeholder='Salary' type="numbers" />
              <input ref={skills} placeholder='Separe your skills with ","' type="text" />
              <input ref={cv} placeholder='CV' type="text" />
              <input ref={photo} placeholder='Profile photo' type="text" />

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