import React, { useState } from 'react'
import { UserData } from '../Models/UserData'
const EntryComp = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState(null)
    const [alert, setAlert] = useState(false)
    const [success,setSuccess] = useState(false)
    const [messsage,setMessage] = useState("")

    const alertType =['alert-danger',"alert-success"]

    const validation = () => {
        let ages = parseInt(age);
        if (ages < 18 || ages > 110) {
            setMessage("Age must be in between 18 to 110")
            setAlert(true)
            return false
        }
        if(sex===null){
            setMessage("Specify the gender")
            setAlert(true)
            return false
        }
        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validation()) {
            let id = new Date().getTime().toString()
            let nameArr = name.split(" ")
            nameArr = nameArr.map(letter => {
                return letter[0].toString().toUpperCase() + letter.substring(1)
            });
            let user = {
                id: id,
                name: nameArr.join(" "),
                age: age,
                sex: sex
            }
            setName(nameArr.join(" "))
            UserData.unshift(user)            
            setMessage("User Added Successfully")
            setSuccess(true)
        }
    }
    return (
        <div className="container-fluid">
            <div className=" d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
                <div className="card">
                    <div className="card-body text-center">
                        <center>
                            <form onSubmit={handleSubmit}>
                                <div className='px-2 py-3 text-center'>
                                    <input type='text'
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        className='form-control my-3 w-100' placeholder='Enter Name' required />
                                    <input type='number'
                                        value={age}
                                        onChange={(e) => { setAge(e.target.value) }}
                                        className='form-control my-3 w-100' placeholder='Enter Age' required />
                                    <select onChange={(e) => { setSex(e.target.value) }} className='form-control my-3 w-100' required>
                                        <option value={null}>Select Gender</option>
                                        <option value='M'>Male</option>
                                        <option value='F'>Female</option>
                                    </select>
                                    <button type='submit' className='btn w-100 btn-success'>Save Details</button>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>

            </div>
             <center>{alert ?
                <div className={`alert alert-danger alert-dismissible fade show w-50`} role="alert">
                    <strong className='px-3'>Warning!</strong> {messsage}.
                    <button type="button" className="btn-close" onClick={()=>{setAlert(false)}} aria-label="Close"></button>
                </div>: ""}
                {success ?
                <div className={`alert alert-success alert-dismissible fade show w-50`} role="alert">
                    <strong className='px-3'>Congratulations ! </strong> {messsage}.
                    <button type="button" className="btn-close" onClick={()=>{setSuccess(false)}} aria-label="Close"></button>
                </div>: ""}
            </center> 
        </div>
    )
}

export default EntryComp
