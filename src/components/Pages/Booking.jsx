import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Calendar from "../Calendar/Calendar";
import gymTraining from '../../assets/images/gymtraining.svg'
import Hero from '../Hero/Hero'

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

  const dates = [
        "2025-09-22T18:00:00.000Z",
        "2025-09-23T18:00:00.000Z",
        "2025-09-24T18:00:00.000Z",
        "2025-09-25T18:00:00.000Z",
        "2025-09-26T18:00:00.000Z",
        "2025-09-27T18:00:00.000Z",
        "2025-09-28T18:00:00.000Z"
    ]

    const dateObjects = dates.map(d => new Date(d))



  return (
    <section className="page-container">
    <Hero
      title="Boka Pass"
      backgroundImage={gymTraining}
    />  
    <Calendar pickedDateChanged={handlePickDate} dateObjects={dateObjects}/>
    
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