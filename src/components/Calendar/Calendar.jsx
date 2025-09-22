import React, { useEffect, useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")
    const [today, setToday] = useState("")    

    useEffect( () => {
        getTodaysDate()
    }, [pickedDay])

    function handlePickDay(date) {
        pickedDateChanged(date)
        setPickedDay(date)
    }

    function getTodaysDate() {
        const today = new Date()
        setToday(today)
        console.log(today)
    }

    function isSameDate(date1, date2) {
        if (!date1 || !date2) return false;
        return date1.getDate() === date2.getDate()
    }

  return (
    <div className='calendar-container'>
        {dateObjects.map( (date, index) => (
        <div 
            className={`day ${date.toString() === pickedDay.toString() ? "picked" : ""} ${isSameDate(date, today) ? "today" : ""}`} 
            key={index} 
            onClick={() => handlePickDay(date)}
        >

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
