import React from 'react'
import { useState } from 'react'
import './CreateUser.scss'
import axios from 'axios'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const CreateUser = () => {
  let navigate = useNavigate()
  const [createUser, setCreateUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: ''
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

    // axios.post('http://localhost:5500/users', createUser)
    //   .then(() => {
    //     navigate('/')
    //   })
    //   .catch((err) => {
    //     alert(err.message)
    //   })
  }


  return (
    <div className='createUser'>
      <div className='cancelBtn'>
        <div></div>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </div>

      <div className='createUserForm'>
        <form>
          <input type="text" placeholder='First Name' name="firstName" onChange={handleChange} />
          <input type="text" placeholder='Last Name' name="lastName" onChange={handleChange} />
          <input type="number" placeholder='Phone Number' name="phone" onChange={handleChange} />
          <input type="email" placeholder='Enter your email' name="email" onChange={handleChange} />
          <input type="password" placeholder='Password' name="password" onChange={handleChange} />
          <input type="text" placeholder='City' name="city" onChange={handleChange} />
          {err && err}

          <button type="submit" onClick={handleCreateUser}>Add</button>


        </form>
      </div>
    </div>
  )
}

export default CreateUser