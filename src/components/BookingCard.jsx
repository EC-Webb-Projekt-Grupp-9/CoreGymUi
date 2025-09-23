import React from 'react'
import './BookingCard.css'
import AccordionDown from '../assets/images/accordion-down.svg'

const BookingCard = ({session}) => {
  const date = new Date(session.startTime)
  const startTime = `${date.getHours()}:${date.getMinutes()}`


  return (
    <div className="booking-card" key={session.id}>
        <div className="booking-time-info">
            <h2>{startTime}</h2>
            <span>{session.duration} min</span>
        </div>
        <h1 className="booking-title">{session.title}</h1>
        <span className="booking-instructor"> {session.trainer} </span>
        <span className="booking-location">{session.location}</span>
        <span className="booking-spots">17 av 20 bokade</span>
        <img src={AccordionDown} alt="" />
    </div>
  )
}

export default BookingCard