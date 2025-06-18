import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import firebase from '../../firebase'
const Login = () => {

  const [signState,setSignState]=useState('Sign In')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const user_auth=async(e)=>
 {
  e.preventDefault()
  if(signState==="Sign In")
  {
    await firebase.logIn(email,password)
  }
  else{
    await firebase.signUp(name,email,password)
  }
 }
  return (
    <div className='login'>
  <img src={logo} className='login-logo' alt=''></img>
    <div className="login-form">
      <h1>{signState}</h1>
      <form>
        {signState==='Sign Up'? <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name'/>:<></>}
       <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button onClick={user_auth} type='submit'>{signState}</button>
        <div className="form-help">
                  <div className="remember">
                    <input type='checkbox' />
                    <label htmlFor=''>Remember Me</label>
                  </div>
                  <p>Need Help?</p>
        </div>

      </form>
      <div className='form-switch'>
         {signState==='Sign In'?  <p>New to Netflix? <span onClick={()=>setSignState('Sign Up')}>Sign Up Now</span></p>
         :
         <p>Already have an Account? <span onClick={()=>setSignState('Sign In')}>Sign In</span></p>}
       
      </div>
    </div>
    </div>
  )
}

export default Login