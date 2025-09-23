import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import {isSameDate} from '../../helpers/DateFunctions'
import Calendar from "../Calendar/Calendar";
import gymTraining from '../../assets/images/gymtraining.svg'
import Hero from '../Hero/Hero'
import BookingCard from "../BookingCard";

const Booking = () => {
  const [sessions, setSessions] = useState([])
  const [currentPickedDay, setCurrentPickedDay] = useState("")

  useEffect( () => {
    fetchSessions()
  }, [])

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
            <BookingCard  session = {session} />
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