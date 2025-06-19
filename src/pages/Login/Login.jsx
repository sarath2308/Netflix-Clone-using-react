import React, { useEffect, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import firebase from '../../firebase'
import loading_gif from '../../assets/netflix_spinner.gif'
const Login = () => {

  const [signState,setSignState]=useState('Sign In')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
   const [nameError,setNameError]=useState('')
  const [emailError,setEmailError]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const [loading,setLoading]=useState(false)
 const user_auth=async()=>
 {
 setLoading(true)
  if(signState==="Sign In")
  {
    await firebase.logIn(email,password)
  }
  else{
    await firebase.signUp(name,email,password)
  }
  setLoading(false)
 }
 const validate=(e)=>
 {
  e.preventDefault()
  let isTrue=true;
  if(signState==='Sign Up')
  {
     if(name==='')
   {
    setNameError("Name Required")
    isTrue=false;
   }
   if(email==='')
   {
    setEmailError("Email required")
    isTrue=false;
   }
   if(password==='')
   {
    setPasswordError("password required")
    isTrue=false;
   }
  }
  else{
if(email==='')
   {
    setEmailError("Email required")
    isTrue=false;
   }
   if(password==='')
   {
    setPasswordError("password required")
    isTrue=false;
   }
  }
  
  if(isTrue)
   {
    user_auth()
   }
   else{
    return;
   }
 }
useEffect(()=>
{
  setEmailError('')
},[email])
useEffect(()=>
{
  setNameError('')
},[name])
useEffect(()=>
{
  setPasswordError('')
},[password])

useEffect(()=>
{
  setEmailError('')
  setNameError('')
  setPasswordError('')
},[signState])
  return (
    loading?<div className="login-spinner">
      <img src={loading_gif} alt=''></img>
      </div>:
    <div className='login'>
  <img src={logo} className='login-logo' alt=''></img>
    <div className="login-form">
      <h1>{signState}</h1>
      <form>
        {signState==='Sign Up'? <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name'/>:<></>}
        {nameError && <p className='error-msg'>Name Required</p>}
       <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
       {emailError && <p className='error-msg'>Email Required</p>}
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        {passwordError && <p className='error-msg'>password Required</p>}
        <button onClick={validate} type='submit'>{signState}</button>
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