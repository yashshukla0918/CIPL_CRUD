import { useEffect, useState } from "react";
import { UserData } from "../Models/UserData";

const UserTable = () => {

    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(false)
    const [updateFor, setUpdateFor] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")

    useEffect(() => {
        setUsers(UserData)
    }, [])



    const validation = () => {

        let ages = parseInt(age);
        if (ages < 18 || ages > 110) {
            alert("Age must be in between 18 to 110")
            return false
        }


        return true
    }


    const initUpdate = (id) => {
        setUpdate(true)
        setUpdateFor(id)
    }



    const updateUser = (id) => {
        if (validation()) {
            let nameArr = name ? name.split(" ") : []
            nameArr = nameArr.map(letter => {
                return letter[0].toString().toUpperCase() + letter.substring(1)
            });

            let updatedUser = [...UserData]?.map((user) => {
                if (user.id === updateFor) {
                    let obj = {
                        age: age ? age : user.age,
                        id: id,
                        name: name ? nameArr.join(" ") : user.name,
                        sex: sex ? sex : user.sex
                    }
                    return obj
                }
                else {
                    return user
                }

            })
            setUsers(updatedUser)
            setUpdate(false)
        }
    }

    const deleteUser = (id) => {
        let ans = window.confirm("Are you sure ! You want delete this user data")
        if (ans) {
            const newArr = users.filter((user) => {
                if (user.id !== id) {
                    return user
                }
            })
            setUsers(newArr)
        }
    }


    return (

        <div className="row text-center my-3">
            <div className="col-sm-12 text-center ">
                <center>
                    <table className="table  caption-top w-50">
                        <caption>List of Users</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...users]?.map((user) => {
                                return (<tr key={user.id}>
                                    <th> {update && updateFor === user.id ? <input value={name ?? name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder={user.name} /> : user.name}</th>
                                    <th>{update && updateFor === user.id ? <input value={age ?? age} onChange={(e) => { setAge(e.target.value) }} className="form-control" placeholder={user.age} /> : user.age}</th>
                                    <th>{update && updateFor === user.id ? <select onChange={(e) => { setSex(e.target.value) }} className='form-control' required>
                                        <option value={null}>Select Gender</option>
                                        <option value='M'>Male</option>
                                        <option value='F'>Female</option>
                                    </select> : user.sex}</th>
                                    <th>{update && updateFor === user.id ? <button onClick={() => { updateUser(user.id) }} className="btn btn-sm btn-primary">Save</button> : <button type="button" onClick={() => { initUpdate(user.id) }} className="btn btn-sm btn-warning">Edit</button>}</th>
                                    <th><button type="button" onClick={() => { deleteUser(user.id) }} className="btn btn-sm btn-danger">Delete</button></th>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default UserTable
