import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './SessionDescription.css'
import {useLocation} from 'react-router-dom';
import ConfirmDelete from './Dialog/ConfirmDelete';

const SessionDescription = ({session}) => {
    const {pathname} = useLocation();
    const isAdmin = pathname.includes('/admin');
  return (
    <div className="description-card">
      {isAdmin ? (
        <>
          <div className="session-description">
            <h3>{session.title}</h3>
            <p>
              Njut av ett power-pass med Ove! Vår efterlängtade tränare är
              äntligen tillbaka och bjuder på ett skönt gymnastik pass. Passar
              både för unga såväl som äldre.
            </p>
          </div>
          <div className="admin-session-buttons">
            <ConfirmDelete />
          </div>
        </>
      ) : (
        <>
          <div className="session-description">
            <h3>{session.title}</h3>
            <p>
              Njut av ett power-pass med Ove! Vår efterlängtade tränare är
              äntligen tillbaka och bjuder på ett skönt gymnastik pass. Passar
              både för unga såväl som äldre.
            </p>
          </div>
          <div className="session-info-section">
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

            <div className="session-info-mobile">
              <span>{session.trainer}</span>
              <span>{session.location}</span>
              <span>15 av {session.spots} bokade</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SessionDescription