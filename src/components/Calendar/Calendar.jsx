import React, { useEffect, useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")
    const [today, setToday] = useState("")
    const [isMobile, setIsMobile] = useState(false)
    const [displayDates, setDisplayDates] = useState([])

    useEffect( () => {
        getTodaysDate()
        checkScreenSize()
        setDisplayDates(isMobile ? dateObjects.filter(date => date.getDate() >= today.getDate()).slice(0, 3) : dateObjects.filter(date => date.getDate() >= today.getDate()).slice(0,7))         

        // Lyssna på fönsterstorlek ändringar
        const handleResize = () => {
            checkScreenSize()
        }

        window.addEventListener('resize', handleResize)        
        return () => window.removeEventListener('resize', handleResize)
       
    }, [pickedDay, dateObjects, isMobile])

    function checkScreenSize() {
        setIsMobile(window.innerWidth <= 768)
    }

    function showNextPeriod() {
        console.log('hej hej')
    }


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

    



    // Visa bara första 3 dagarna på mobil, alla på desktop
    

    return (
        <div className='calendar-container'>
            <i className="bi bi-arrow-left-short" onClick={showNextPeriod}></i>
            {displayDates.map( (date, index) => (
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

            {/* Visa navigering på mobil för att bläddra mellan dagar */}
            {isMobile && dateObjects.length > 3 && (
                <div className="mobile-nav">

                </div>
            )}
            <i className="bi bi-arrow-right-short" onClick={showNextPeriod}></i>            
        </div>

    
    )
}