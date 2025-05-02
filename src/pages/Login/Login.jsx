import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {
  const[currstate,setCurrState]=useState("Sign Up");
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className="logo" />
        <form className='login-form'>
          <h2>{currstate}</h2>
          {currstate==="Sign Up"?<input type="text" placeholder='username' className="form-input" required/>:null}
          <input type="text" placeholder='Email address' className="form-input" required/>
          <input type="text" placeholder='Password' className="form-input" required/>
          <button type='submit'>{currstate==="Sign Up"?"Create Account":"Login Now"}</button>
          <div className='login-term'>
            <input type='checkbox'></input>
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
          <div className="login-forgot">
            {
              currstate==="Sign Up"
              ?<p className="login-toggle">Already have an account<span onClick={()=>setCurrState("Login")}> Click here</span></p>
              :<p className="login-toggle">Create an account<span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
            }
          </div>
        </form>
    </div>
  )
}

export default Login