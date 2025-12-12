import React from 'react'
import '../Sign.css'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

const Login = () => {



   const backLogin = async () => {
      let data = await fetch("http://localhost:3030", {
        method: "POST",
        headers: { " Content-Type": "application/json" },
        body: JSON.stringify({ username: "", password: "" }),
      });
      let res = await data.json();
      console.log(res);
        
   }











      const Navigate = useNavigate()
      const sigup = () => { 
            Navigate('/Signup')
      };
  return (
    <div id='signup-page'>

         
        
        <div className="signup-container">
            <div id="signup-middle">
            <h2>Log into instagram</h2>
            <input type="username" placeholder='Phone number, username, or email' />
            <input type="password" placeholder='Password' />
            <button id='login-btn'>Log In</button>
            <button id='forget-password-btn'>Forget password?</button>
            </div>
            <div id="signup-bottom">

              <button id='btn1'>Login with facebook</button>
              <button onClick={sigup} id='btn2'>Create a new account</button>
              <h2><img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-meta-social-media-tanah-basah-basic-outline-tanah-basah.png" alt="external-meta-social-media-tanah-basah-basic-outline-tanah-basah"/>Meta</h2>



            </div>
        </div>
      
    </div>
  )
}

export default Login
