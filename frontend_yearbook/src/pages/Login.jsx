import React from 'react'
import Form from '../components/Form'
import '../styles/RegisterStyles.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='register-container'>
    <Form route='/students/token/' method='login'/>
    <div className="login-link">
      <p>
        Not yet registered? <Link to="/register">Register here</Link>
      </p>
    </div>
  </div>
  )

  
}

export default Login