import React, { useContext, useEffect, useRef } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import TitleCard from '../../components/TitleCards/TitleCard'
import { ListContext } from '../../Context/ListContext'
 import { ToastContainer, toast } from 'react-toastify';


export const Player = () => {
  //ref
 const btnRef=useRef()
  //use state
  const {myList,setMyList}=useContext(ListContext)
  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })

  const [isInList, setIsInList] = useState(false);
  //navigate & params
  const navigate=useNavigate()
  const {id}=useParams();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWMwNmI0NTM0MGRhYzZlZDc0YTkxMzFiNDM3ZWY2MyIsIm5iZiI6MTc1MDE3MjE2Mi4zOTgwMDAyLCJzdWIiOiI2ODUxODIwMjAxYmNjZjBkYTg2YWViMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xb8km8sEA0eP8LHjjEO5i2wEn7EloUX_sBHtPZNq6p8'
  }
};

useEffect(() => {
  const exists = myList.some(movie => movie.id === apiData.id);
  setIsInList(exists);
}, [myList, apiData]);
//useEffect
useEffect(()=>
{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
 
},[id])

useEffect(()=>
{
 localStorage.setItem('myList',JSON.stringify(myList))
},[isInList])

const toggleWatchList = () => {
  if (isInList) {
    setMyList(prev => prev.filter(movie => movie.id !== apiData.id));
    toast.info("Removed from Watchlist");
  } else {
    setMyList(prev => [...prev, apiData]);
    toast.success("Added to WatchList")
  }
  setIsInList(!isInList);
};

  return (
    <>
      <div className='player'>
        <div className='trailer-container'>
          <img src={back_arrow} alt="Back" onClick={() => navigate('/')} />
          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="details-container">
        <div className="title-actions">
          <h1>{apiData.name}</h1>
          <div className="actions">
            <button id="watchlistBtn" ref={btnRef} className={` ${isInList?'added':''} btn watchlist-btn`} onClick={toggleWatchList}>
              {isInList ? (
      <>
        <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 20, height: 20, marginRight: 8 }}>
          <path d="M5 13l4 4L19 7"></path>
        </svg>
        Added to Watchlist
      </>
    ) : (
      <>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 20, height: 20, marginRight: 8 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Add to Watchlist
      </>
    )}
            </button>
          </div>
        </div>

        <div className="metadata">
          <span className="match">96% Match</span>
          <span>{apiData.published_at.slice(0,10)}</span>
          <span>2h 15m</span>
          <span className="rating">PG-13</span>
          <span>HD</span>
        </div>

        <p className="description">
          A gripping tale of adventure and mystery unfolds as a group of unlikely heroes embark on a quest to uncover a hidden truth that could change the world forever. Packed with action, drama, and heart, this film is a must-watch.
        </p>

        <div className="details-grid">
          <div>
            <p><span>Cast:</span> Actor 1, Actor 2, Actor 3</p>
            <p><span>Genres:</span> Action, Adventure, Drama</p>
            <p><span>This movie is:</span> Exciting, Suspenseful</p>
          </div>
          <div>
            <p><span>Director:</span> Director Name</p>
            <p><span>Writers:</span> Writer 1, Writer 2</p>
          </div>
        </div>
      </div>

      <TitleCard title="Suggested For You" />
    </>
  );
};


