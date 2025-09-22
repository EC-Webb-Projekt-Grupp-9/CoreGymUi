import React from 'react'
import './Hero.css'

const Hero = ({ title, backgroundImage }) => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
            }}
        >
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content">
                            <h1 className="hero-title">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero