import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import card_data from '../../assets/cards/Cards_data'

const TitleCard = ({title}) => {

  const cardsRef=useRef()
const handleWheel=(event)=>
{
event.preventDefault;
cardsRef.current.scrollLeft+=event.deltaY;
}
  useEffect(()=>
  {
  cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
    <div className='titleCard'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {card_data.map((card,i)=>{
          return <div className='card' key={i}>
            <img src={card.image} alt='' />
            <p>{card.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard