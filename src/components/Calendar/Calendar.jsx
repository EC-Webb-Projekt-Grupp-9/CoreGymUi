import React, { useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")

    useState( () => {

    }, [pickedDay])

    function handlePickDay(date) {
        pickedDateChanged(date)
        setPickedDay(date)
    }

  return (
    <div className='calendar-container'>
        {dateObjects.map( (date, index) => (
        <div className={`day ${date.toString() === pickedDay.toString() ? "picked" : ""}`} key={index} onClick={() => handlePickDay(date)}>            
            <p><strong>{date.toLocaleDateString("sv-SE", { weekday: "long" })}</strong></p>
            <div className='month'>
                <p>{date.toLocaleDateString("sv-SE", {month: "long"})}</p>
                <p>{date.getDate()}</p>
            </div>
            
        </div>
    ))}
    </div>
    
  )
}
