import React from 'react'
import { useState, useContext} from 'react'
import { DataContext } from '../../context/dataContext'
import './UpdateUser.scss'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'


const UpdateUser = ({getEditId}) => {

const { users } = useContext(DataContext);
const editUser = users.find((user) => user._id === getEditId)  
 
const [updateUser, setUpdateUser] = useState({
    studentId: editUser.studentId,
    name: editUser.name,
    teacherName: editUser.teacherName,
    subject: editUser.subject,
    marks: editUser.marks,
  
  })
const [err, setErr] = useState(null)
let navigate = useNavigate()

 
const handleChange = (e) => {
  setUpdateUser(prev => ({ ...prev, [e.target.name]: e.target.value})) 
  }

const handleUpdateUser = async (e) => {
  e.preventDefault()
 
    try {
      await axios.put(`http://localhost:5500/users/user/${getEditId}`, updateUser)
      navigate('/')
    }  catch (err) {
        setErr(err.response.data)
    } 

}


  return (
    <div className='updateUser'>
        <div className='cancelBtn'>
            <div><h3>Update Student Data</h3></div>
            <NavLink to="/">
                <button>Cancel</button>
            </NavLink>
        </div>

        <div className='updateUserForm'>
          <form>
            <input type="text" placeholder='Student Id' name="studentId" 
                    onChange={handleChange} defaultValue={updateUser.studentId}/>
            <input type="text" placeholder='Name' name="name" 
                    onChange={handleChange} defaultValue={updateUser.name}/>
            <input type="text" placeholder='Teacher Name' name="teacherName" 
                    onChange={handleChange} defaultValue={updateUser.teacherName}/>
            <input type="text" placeholder='Enter subject' name="subject" 
                    onChange={handleChange} defaultValue={updateUser.subject}/>
            <input type="number" placeholder='Enter Mark' name="marks" 
                    onChange={handleChange} defaultValue={updateUser.marks}/>
           
            {err && err}
            <NavLink to='/'>
              <button type="submit" onClick={handleUpdateUser}>Update</button>      
            </NavLink>
            
          </form>
        </div>
    </div>
  )
}

export default UpdateUser