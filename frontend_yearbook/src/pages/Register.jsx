import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import '../styles/RegisterStyles.css'

function Register() {
  return (
    <div className='register-container'>
      <Form route='/students/user/register/' method='register' />
      <div className="login-link">
        <p>
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
