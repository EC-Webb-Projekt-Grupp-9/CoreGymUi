import React from 'react';
import './InfoSection.css';
import InfoImage from '../../assets/images/Info-image.svg'

const InfoSection = () => {
  return (
    <div className="info-section">
        <div className="info-left-side">
            <img src={InfoImage} alt="InfoImage" />
        </div>
        <div className="info-right-side">
            <div className="gym-info">
                <h2 className="gym-info-title">Information om gymmet</h2>
                <p className="gym-info-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                </p>    
            </div>
        </div>
    </div>
  )
}

export default InfoSection