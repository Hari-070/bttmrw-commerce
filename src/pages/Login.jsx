import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div>
        <h1>LOGIN</h1>
        <form>
          <label>username: </label>
          <input type='text' placeholder='username'/>
          <label>Password: </label>
          <input type='password' placeholder='password'/>
          <button>Login</button>
        </form>
        <p>Dont have an account?<span><Link to="/signup">Signup</Link></span></p>
      </div>
    </div>
  )
}

export default Login
