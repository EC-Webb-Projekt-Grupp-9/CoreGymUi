import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import {isSameDate} from '../../helpers/DateFunctions'
import Calendar from "../Calendar/Calendar";
import gymTraining from '../../assets/images/gymtraining.svg'
import Hero from '../Hero/Hero'
import BookingCard from "../BookingCard";
import SessionDescription from "../SessionDescription";
import { ADDRESS } from "../../assets/js/config";


const Booking = () => {
  const [sessions, setSessions] = useState([])
  const [currentPickedDay, setCurrentPickedDay] = useState("")
  const [selectedSessionId, setSelectedSessionId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect( () => {
    fetchSessions()
  }, [])

  async function fetchSessions() {
    const res = await fetch(`${ADDRESS}/api/session/`)
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
    
    <div className="container my-5">
        <div className="row">
            <div className="col-12">
                <h2>Bokningsformulär kommer här</h2>
                <p>Här kommer bokningsfunktionaliteten att implementeras.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Booking;