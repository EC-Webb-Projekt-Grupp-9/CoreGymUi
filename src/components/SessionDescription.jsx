import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './SessionDescription.css'

const SessionDescription = () => {
  return (
    <div className="description-card">
        <div className="session-description">
            <p>Njut av ett power-pass med Ove! Vår efterlängtade tränare är äntligen tillbaka och bjuder på ett skönt gymnastik pass. Passar både för unga såväl som äldre.</p>
        </div>
        <div className="card-contact-info">
            <h2>Boka</h2>

            <div className="contact-phone">
                <FontAwesomeIcon icon={faPhone} />
                <span>070 1234 5678</span>
            </div>

            <div className="contact-email">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>boka@core-gym.com</span>
            </div>

        </div>
    </div>
  )
}

export default SessionDescription