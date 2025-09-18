import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center">
                        <div className="logo-icon me-2">
                            <div className="dumbbell-container">
                                <div className="dumbbell-weight"></div>
                                <div className="dumbbell-bar"></div>
                                <div className="dumbbell-weight"></div>
                            </div>
                        </div>
                        <span className="fw-bold text-primary fs-4">CORE</span>
                    </div>

                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active fw-semibold me-4" href="#">Startsida</a>
                        <a className="nav-link fw-semibold" href="#">Boka pass</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Välkommen till Core Gym Club</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="main-content py-5">
                <div className="container">
                    <div className="row">
                        {/* Left Column - Gym Image */}
                        <div className="col-lg-4 mb-4">
                            <div className="gym-image-container">
                                {/* Byt ut denna div mot din gym-bild */}
                                <div className="gym-image-placeholder">
                                    <p className="text-center text-muted mt-5">
                                        LÄGG IN GYM-BILD HÄR
                                        <br />
                                        <small>(300x400px rekommenderat)</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Info */}
                        <div className="col-lg-8">
                            <div className="info-content">
                                <h2 className="info-title mb-4">Information om gymmet</h2>
                                <p className="info-text mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                </p>
                                <button className="btn btn-custom btn-lg">Boka Här</button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Contact Info and Map */}
                    <div className="row mt-5">
                        {/* Contact Info */}
                        <div className="col-lg-6">
                            <div className="contact-info">
                                <div className="mb-4">
                                    <h5 className="fw-bold">Berzeliisgatan 18</h5>
                                    <p className="mb-1">412 53 Göteborg</p>
                                    <p className="mb-1">Tel: 070 1234 5678</p>
                                    <p className="mb-0">E-Mail: boka@core-gym.com</p>
                                </div>

                                <div>
                                    <h5 className="fw-bold mb-3">Öppettider</h5>
                                    <p className="mb-1">Mån - Fre: 07:00 - 21:00</p>
                                    <p className="mb-0">Lör - Sön: 10:00 - 15:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="col-lg-6">
                            <div className="map-container">
                                {/* Byt ut denna div mot din karta */}
                                <div className="map-placeholder">
                                    <p className="text-center text-muted">
                                        LÄGG IN KARTA HÄR
                                        <br />
                                        <small>(Google Maps eller liknande)</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <Footer /> 
            {/* Footer */}
            {/* <footer className="footer bg-primary text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">© 2025 Core Gym Club AB. All rights reserved.</p>
                </div>
            </footer> */}
        </div>
    );
}

export default App;