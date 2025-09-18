import React from 'react';
import './InfoSection.css';
import InfoImage from '../../assets/images/Info-image.svg'

const InfoSection = () => {
    return (
        <section className="info-section">
            <img src={InfoImage} alt="Gym info" className="gym-info" />
        </section>
    );
};

export default InfoSection;