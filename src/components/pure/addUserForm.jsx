import React, { useRef } from 'react'


function AddUserForm({addUser}) {

    //ver si ahorro codigo en un useState

    const  name = useRef("")
    const  lastname = useRef("")
    const  email = useRef("")
    const  password = useRef("")
    const  passport = useRef("")
    const  city = useRef("")
    const  level = useRef("")
    const  salary = useRef("")
    const  skills = useRef("")
    //const  photo = useRef("")
    //const  cv = useRef("")

    function sendAddUserForm(e){
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

        addUser(nameValue,
            lastnameValue,
            emailValue,
            passwordValue,
            passportValue,
            cityValue,
            levelValue,
            salaryValue,
            skillsValue
        )
    }

  return (
    <form onSubmit={sendAddUserForm} className="profileContainer">
        <div  className="inputsList">

            <h1>New Profile</h1>

            <div className="labelXinput">
                <label >Name:</label>
                <input ref={name} type="text" placeholder='Name' />
            </div>

            <div className="labelXinput">
                <label> LastName:</label>
                <input ref={lastname} type="text" placeholder='LastName' />
            </div>

            <div className="labelXinput">
            <label>Email:</label>
            <input ref={email} type="text" placeholder='Example@email.com' />
            </div>

            <div className="labelXinput">
            <label >Passport:</label>
            <input  ref={passport} type="text" placeholder='Passport' />
            </div>

            <div className="labelXinput">
            <label >Password:</label>
            <input  ref={password} type="text" placeholder='Password' />
            </div>

            <div className="labelXinput">
            <label >City:</label>
            <input ref={city} type="text" placeholder='City' />
            </div>


            <div className="labelXinput">
            <label >Level:</label>
            <input ref={level} type="text" placeholder='Level' />
            </div>

            <div className="labelXinput">
            <label >Salary:</label>
            <input ref={salary} type="text" placeholder='Salary' />
            </div>

            <div className="labelXinput">
            <label >Skills:</label>
            <input ref={skills} type="text" placeholder='Skills' />
            </div>

            <h1>Upload Files:</h1>

            <div className="labelXinput">
            <label >Profile Picture:</label>
            <input type="file" placeholder='Photo' />
            </div>

            <div className="labelXinput">
            <label >CV:</label>
            <input type="file" placeholder='CV' />
            </div>

        </div>
        <div className="btnProfileContainer">
            <button className="dismissButton">Comeback</button>
            <button className="successButton">Create</button>
        </div>
    </form>
  )
}

export default AddUserForm