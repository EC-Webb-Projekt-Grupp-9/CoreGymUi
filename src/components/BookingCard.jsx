import React from 'react'
import './BookingCard.css'
import AccordionDown from '../assets/images/accordion-down.svg'

const BookingCard = () => {
  return (
    <div className="booking-card">
        <div className="booking-time-info">
            <h2>14:00</h2>
            <span>30 min</span>
        </div>
        <h1 className="booking-title">Spinning</h1>
        <span className="booking-instructor"> Lina Larsson </span>
        <span className="booking-location">Göteborg</span>
        <span className="booking-spots">17 av 20 bokade</span>
        <img src={AccordionDown} alt="" />
    </div>
  )
}

export default BookingCard