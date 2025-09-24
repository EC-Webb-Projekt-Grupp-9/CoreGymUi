import React from 'react';
import './InfoSection.css';
import { Links, NavLink } from 'react-router-dom'
import InfoImage from '../../assets/images/Info-image.svg'

const InfoSection = () => {
  return (
    <div className="info-section">
        <div className="info-left-side">
            <img className="info-image" src={InfoImage} alt="InfoImage" />
        </div>
        <div className="info-right-side">
            <div className="gym-info">
                <h2 className="gym-info-title">Information om gymmet</h2>
                <p className="gym-info-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                </p>    
            </div>
            <div className='btn-container'>
               <NavLink to={"/booking"}>
                <button className="btn-boka">Boka här</button>
               </NavLink>
            </div>
        </div>
    </div>
  )
}

export default InfoSection