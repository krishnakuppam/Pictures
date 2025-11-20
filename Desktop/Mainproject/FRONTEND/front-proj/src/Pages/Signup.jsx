import React from 'react'
import '../Sign.css'

const Signup = () => {
  return (
    <div id='signup-page'>
        
        <div className="signup-container">
            <div id="signup-middle">
            <h2>Log into instagram</h2>
            <input type="text" placeholder='Phone number, username, or email' />
            <input type="password" placeholder='Password' />
            <button id='login-btn'>Log In</button>
            <button id='forget-password-btn'>Forget password?</button>
            </div>
            <div id="signup-bottom">

              <button>Login with facebook</button>
              <button>Create a new account</button>
              <h2>Meta</h2>

            </div>
        </div>
      
    </div>
  )
}

export default Signup
