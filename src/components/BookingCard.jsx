import React, { useState } from 'react'
import './BookingCard.css'
import AccordionDown from '../assets/images/accordion-down.svg'

const BookingCard = ({ session, isExpanded = false }) => {
    const [expanded, setExpanded] = useState(isExpanded)

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    // Mock data - ersätt med riktiga props senare
    const sessionData = session || {
        time: "14:00",
        duration: "30 min",
        title: "Spinning",
        instructor: "Lina Larsson",
        location: "Göteborg",
        spots: "17 av 20 bokade",
        description: "Njut av ett power-pass med Lina! Vår efterlängtade tränare är äntligen tillbaka och bjuder på ett skönt spinning pass. Passar både för unga såväl som äldre.",
        instructorInfo: {
            name: "Lina Larsson",
            phone: "070 1234 5678",
            email: "lina@core-gym.com"
        }
    }
  
    /*
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
    */

    return (
        <div className={`booking-card ${expanded ? 'expanded' : 'collapsed'}`}>
            {/* Huvudinnehåll - alltid synligt */}
            <div className="booking-card-header" onClick={toggleExpanded}>
                <div className="booking-time-info">
                    <h2>{sessionData.time}</h2>
                    <span>{sessionData.duration}</span>
                </div>
                <h1 className="booking-title">{sessionData.title}</h1>
                <span className="booking-instructor">{sessionData.instructor}</span>
                <span className="booking-location">{sessionData.location}</span>
                <span className="booking-spots">{sessionData.spots}</span>
                <img
                    src={AccordionDown}
                    alt="Expandera"
                    className={`accordion-icon ${expanded ? 'rotated' : ''}`}
                />
            </div>

            {/* Expanderat innehåll */}
            {expanded && (
                <div className="booking-card-expanded">
                    {/* Sektion 1: Beskrivning */}
                    <div className="session-description-section">
                        <h3>Passbeskrivning</h3>
                        <p>{sessionData.description}</p>
                    </div>

                    {/* Sektion 2: Kontaktinfo */}
                    <div className="contact-info-section">
                        <h3>Kontakt</h3>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>{sessionData.instructorInfo.phone}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>{sessionData.instructorInfo.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Sektion 3: Extra info */}
                    <div className="booking-action-section">
                        <p className="booking-note">
                            Bokningsfunktion kommer snart...
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookingCard