import React, { useEffect, useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")
    const [today, setToday] = useState(new Date())
    const [isMobile, setIsMobile] = useState(false)   
    const [startDate, setStartDate] = useState(new Date())

    useEffect( () => {        
        checkScreenSize()     
        
        window.addEventListener('resize', checkScreenSize)        
        return () => window.removeEventListener('resize', checkScreenSize)
       
    }, [])

    function checkScreenSize() {
        setIsMobile(window.innerWidth <= 768)
    }
  


    function handlePickDay(date) {
        pickedDateChanged(date)
        setPickedDay(date)
    }
    


    function isSameDate(date1, date2) {
        if (!date1 || !date2) return false;
        return date1.getDate() === date2.getDate()
    }

     function getPeriodDays(baseDate) {
    return Array.from({ length: isMobile ? 3 : 7 }, (_, i) => {
      const d = new Date(baseDate)
      d.setDate(baseDate.getDate() + i)
      return d
    })
  }

    function showNextPeriod() {
    const newStart = new Date(startDate)
    newStart.setDate(startDate.getDate() + (isMobile ? 3 : 7))
    setStartDate(newStart)
  }

  function showPrevPeriod() {
    const newStart = new Date(startDate)
    newStart.setDate(startDate.getDate() - (isMobile ? 3 : 7))
    setStartDate(newStart)
  }
    

    const displayDates = getPeriodDays(startDate)

    

    return (
        <div className='calendar-container'>
            <i className="bi bi-arrow-left-short" onClick={showPrevPeriod}></i>
            {displayDates.map( (date, index) => (
                <div
                    className={`day ${date.toString() === pickedDay.toString() ? "picked" : ""} ${isSameDate(date, today) ? "today" : ""}`}
                    key={date.toISOString()}
                    onClick={() => handlePickDay(date)}
                >
                    <p><strong>{date.toLocaleDateString("sv-SE", { weekday: "long" })}</strong></p>
                    <div className='month'>
                        <p>{date.toLocaleDateString("sv-SE", {month: "long"})}</p>
                        <p>{date.getDate()}</p>
                    </div>
                </div>
            ))}

           
            {isMobile && dateObjects.length > 3 && (
                <div className="mobile-nav">

                </div>
            )}
            <i className="bi bi-arrow-right-short" onClick={showNextPeriod}></i>            
        </div>

    
    )
}