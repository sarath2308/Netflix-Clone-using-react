import React, { useEffect } from 'react'
import Home from './pages/Home/Home' 
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import { Player } from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import firebase from './firebase'
import { ToastContainer,toast } from 'react-toastify'
import {Mylist} from './pages/mylist/Mylist'
import { ListContext, ListProvider } from './Context/ListContext'
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
  console.log("app rendering");
  
  return (
    <div>
      <ToastContainer theme='dark' />
      {console.log("before context wrapper")}
      <ListProvider>
      <Routes>
             <Route path='/' element={<Home />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/player/:id' element={<Player />}></Route>
           <Route path='/mylist' element={<Mylist />}></Route>
      </Routes>
      </ListProvider>
    </div>
  )
}

export default App