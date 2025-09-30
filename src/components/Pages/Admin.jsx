import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import {isSameDate} from '../../helpers/DateFunctions'
import Calendar from "../Calendar/Calendar";
import gymTraining from '../../assets/images/gymtraining.svg'
import Hero from '../Hero/Hero'
import BookingCard from "../BookingCard";
import SessionDescription from "../SessionDescription";
import Form from "../Form/Form";
import ConfirmPopUp from "../Form/ConfirmPopUp";
const Booking = () => {
  const [sessions, setSessions] = useState([])
  const [currentPickedDay, setCurrentPickedDay] = useState("")
  const [selectedSessionId, setSelectedSessionId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect( () => {
    fetchSessions()
  }, [])

  const handleFormSuccess = () => {
    setShowConfirm(true);

    // Dölj meddelandet efter 5 sekunder
    setTimeout(() => {
      setShowConfirm(false);
    }, 5000);
  }

  async function fetchSessions() {
    const res = await fetch("https://localhost:7072/sessions")
    const jsonData = await res.json()
    setSessions(jsonData)
  }

  function handlePickDate(date) {
    setCurrentPickedDay(date)
  }

  const dateObjects = sessions
  .map(session => new Date(session.startTime))
  .filter((date, index, arr) => 
      arr.findIndex(d => d.toDateString() === date.toDateString()) === index
  )

  function handleSelect(id) {
    setSelectedSessionId(prev => (prev === id ? null : id));
  }


  return (
    <section className="page-container">
    <Hero
      title="Boka Pass"
      backgroundImage={gymTraining}
    />  
    <Calendar pickedDateChanged={handlePickDate} dateObjects={dateObjects}/>

    <div>
      {currentPickedDay ? (
        sessions
          .filter(session => isSameDate(new Date(session.startTime), currentPickedDay))
          .map(session => (
            <div key={session.id}>
              <BookingCard  
              session = {session} 
              onClick={() => handleSelect(session.id)} 
              isExpanded={selectedSessionId === session.id}
              />  

              {selectedSessionId === session.id && (
              <SessionDescription session={session}/>
            )}
            </div>
          ))
      ) : (
        <p></p>
      )}
    </div>


    
  {showConfirm && <ConfirmPopUp />}
  {showForm && <Form onClose={() => setShowForm(false)} onSuccess={handleFormSuccess} />}
    <button className="btn-continue" onClick={() => setShowForm(!showForm)}>
        Lägg till pass
      </button>

    </section>
  )
}

export default Booking;