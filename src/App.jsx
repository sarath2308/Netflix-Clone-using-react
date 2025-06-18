import React, { useEffect } from 'react'
import Home from './pages/Home/Home' 
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import { Player } from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import firebase from './firebase'
const App = () => {
  const navigate=useNavigate()
  useEffect(()=>
  {
  onAuthStateChanged(firebase.auth,(user)=>
  {
    if(user)
    {
      navigate('/')
      console.log("login success");
      
    }
    else
    {
      navigate('/login')
      console.log("loged out");
      
    }
  })

  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/player/:id' element={<Player />}></Route>
      </Routes>
    </div>
  )
}

export default App