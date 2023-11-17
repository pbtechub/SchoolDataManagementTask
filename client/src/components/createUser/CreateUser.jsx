import React from 'react'
import { useState } from 'react'
import './CreateUser.scss'
import axios from 'axios'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const CreateUser = () => {
  let navigate = useNavigate()
  const [createUser, setCreateUser] = useState({
    studentId: '',
    name: '',
    teacherName: '',
    subject: '',
    marks: '',
   
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setCreateUser(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }

  const handleCreateUser = async (e) => {
    e.preventDefault()
  
    try {
      await axios.post('http://localhost:5500/users', createUser)
      navigate('/')
    }  catch (err) {
        setErr(err.response.data)
       
    } 

  }


  return (
    <div className='createUser'>
      <div className='cancelBtn'>
        <div><h3>Add Student Data</h3></div>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </div>

      <div className='createUserForm'>
        <form>
          <input type="text" placeholder='Student Id' name="studentId" onChange={handleChange} />
          <input type="text" placeholder='Name' name="name" onChange={handleChange} />
          <input type="text" placeholder='Teacher Name' name="teacherName" onChange={handleChange} />
          <input type="text" placeholder='Enter subject' name="subject" onChange={handleChange} />
          <input type="number" placeholder='Enter Mark' name="marks" onChange={handleChange} />
          
          {/* {err && <span>{err}</span>} */}
          <button type="submit" onClick={handleCreateUser}>Add</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser