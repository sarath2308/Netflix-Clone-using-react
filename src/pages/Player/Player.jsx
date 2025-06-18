import React, { useEffect } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
export const Player = () => {
  const navigate=useNavigate()
  const {id}=useParams();
  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWMwNmI0NTM0MGRhYzZlZDc0YTkxMzFiNDM3ZWY2MyIsIm5iZiI6MTc1MDE3MjE2Mi4zOTgwMDAyLCJzdWIiOiI2ODUxODIwMjAxYmNjZjBkYTg2YWViMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xb8km8sEA0eP8LHjjEO5i2wEn7EloUX_sBHtPZNq6p8'
  }
};
useEffect(()=>
{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
 
},[])
  return (
    <div className='player' >
      <img src={back_arrow} alt="" onClick={()=>navigate('/')}></img>
      
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
            <p>{apiData.typeof}</p>
      </div>
      </div>
  )
}
