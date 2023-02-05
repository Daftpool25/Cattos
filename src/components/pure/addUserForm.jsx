import React from 'react'


function AddUserForm() {
  return (
    <div className="profileContainer">
        <div className="inputsList">

            <h1>New Profile</h1>

            <div className="labelXinput">
                <label >Name:</label>
                <input type="text" placeholder='Name' />
            </div>

            <div className="labelXinput">
                <label> LastName:</label>
                <input type="text" placeholder='LastName' />
            </div>

            <div className="labelXinput">
            <label>Email:</label>
            <input type="text" placeholder='Example@email.com' />
            </div>

            <div className="labelXinput">
            <label >Passport:</label>
            <input type="text" placeholder='Passport' />
            </div>

            <div className="labelXinput">
            <label >City:</label>
            <input type="text" placeholder='City' />
            </div>

            <div className="labelXinput">
            <label >Status:</label>
            <input type="text" placeholder='Status' />
            </div>

            <div className="labelXinput">
            <label >Level:</label>
            <input type="text" placeholder='Level' />
            </div>

            <div className="labelXinput">
            <label >Salary:</label>
            <input type="text" placeholder='Salary' />
            </div>

            <div className="labelXinput">
            <label >Skills:</label>
            <input type="text" placeholder='Skills' />
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
    </div>
  )
}

export default AddUserForm