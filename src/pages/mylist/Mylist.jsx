import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../mylist/Mylist.css'
import { ListContext } from '../../Context/ListContext'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
export const Mylist = () => {
 const {myList,setMyList}=useContext(ListContext)
 const navigate=useNavigate()
   
  return (
   <div className='mylist'>
    <Navbar />
    <div className='mylist-container'>
        <div className='title'>
            <h2>MyList</h2>
        </div>
        <div className='movie-list'>
        {myList.map((movie,i)=>
        {
           return <div  onClick={()=>navigate(`/player/${movie.sid}`)} className='mylist-cards' key={i}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.img_url}`} alt='' />
            <p className='movie-name'>{movie.name}</p>
            </div>
        })}
        </div>
    </div>
   </div>
  )
}
