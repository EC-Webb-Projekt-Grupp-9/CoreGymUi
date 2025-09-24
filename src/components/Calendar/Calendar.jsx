import React, { useEffect, useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")
    const [today, setToday] = useState("")
    const [isMobile, setIsMobile] = useState(false)
    // const [displayDates, setDisplayDates] = useState([])
    const [startDate, setStartDate] = useState(new Date())

    useEffect( () => {
        getTodaysDate()
        checkScreenSize()
        // setDisplayDates(isMobile ? dateObjects.filter(date => date.getDate() >= today.getDate()).slice(0, 3) : dateObjects.filter(date => date.getDate() >= today.getDate()).slice(0,7))         

        // Lyssna på fönsterstorlek ändringar
        const handleResize = () => {
            checkScreenSize()
        }

        window.addEventListener('resize', handleResize)        
        return () => window.removeEventListener('resize', handleResize)
       
    }, [dateObjects, isMobile])

    function checkScreenSize() {
        setIsMobile(window.innerWidth <= 768)
    }

    // function showNextPeriod() {    
    //     const currentStartDate = new Date(today)
    //     currentStartDate.setDate(today.getDate() + 6)    
    //     setDisplayDates(isMobile 
    //         ? dateObjects.filter(date => date.getDate() >= today.getDate()).slice(0, 3) 
    //         : dateObjects.filter(date => date >= currentStartDate).slice(0,7))        
              
    //     console.log(currentStartDate)
    //     console.log(displayDates)
    // }


    function handlePickDay(date) {
        pickedDateChanged(date)
        setPickedDay(date)
    }

    function getTodaysDate() {
        const today = new Date()
        setToday(today)        
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