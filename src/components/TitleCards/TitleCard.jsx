import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import card_data from '../../assets/cards/Cards_data'
import { useNavigate } from 'react-router-dom'

const TitleCard = ({title,category}) => {
  const navigate=useNavigate()
  const [apiData,setApiData]=useState([])
  const cardsRef=useRef()
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWMwNmI0NTM0MGRhYzZlZDc0YTkxMzFiNDM3ZWY2MyIsIm5iZiI6MTc1MDE3MjE2Mi4zOTgwMDAyLCJzdWIiOiI2ODUxODIwMjAxYmNjZjBkYTg2YWViMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xb8km8sEA0eP8LHjjEO5i2wEn7EloUX_sBHtPZNq6p8'
  }
};

const handleWheel=(event)=>
{
event.preventDefault;
cardsRef.current.scrollLeft+=event.deltaY;
}
  useEffect(()=>
  {
  cardsRef.current.addEventListener('wheel',handleWheel)

  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  },[])
  return (
    <div className='titleCard'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,i)=>{
          return <div  onClick={()=>navigate(`/player/${card.id}`)} className='card' key={i}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt='' />
            <p>{card.original_title}</p>
            </div>
            
        })}
      </div>
    </div>
  )
}

export default TitleCard