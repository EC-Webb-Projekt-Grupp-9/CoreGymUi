import React, { useEffect, useState } from 'react'
import './calendar.css'

export default function Calendar({pickedDateChanged, dateObjects}) {
    const [pickedDay, setPickedDay] = useState("")
    const [today, setToday] = useState("")
    const [isMobile, setIsMobile] = useState(false)

    useEffect( () => {
        getTodaysDate()
        checkScreenSize()

        // Lyssna på fönsterstorlek ändringar
        const handleResize = () => {
            checkScreenSize()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [pickedDay])

    function checkScreenSize() {
        setIsMobile(window.innerWidth <= 768)
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
    const displayDates = isMobile ? dateObjects.slice(0, 3) : dateObjects

    return (
        <div className='calendar-container'>
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
        </div>
    )
}