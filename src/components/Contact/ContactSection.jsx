import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-lg-6">
                        <div className="contact-info">
                            {/* Address Info */}
                            <div className="address-section">
                                <h5 className="contact-heading">Berzeliisgatan 18</h5>
                                <p className="mb-1">412 53 Göteborg</p>
                                <p className="mb-1">Tel: 070 1234 5678</p>
                                <p className="mb-0">E-Mail: boka@core-gym.com</p>
                            </div>

                            {/* Opening Hours - FOKUS PÅ DENNA DEL FÖR USER STORY */}
                            <div className="opening-hours-section">
                                <h3 className="opening-hours-title">Öppettider</h3>
                                <div className="opening-hours-content">
                                    <div className="hours-row">
                                        <span className="days">Mån - Fre:</span>
                                        <span className="times">07:00 - 21:00</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="days">Lör - Sön:</span>
                                        <span className="times">10:00 - 15:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="col-lg-6">
                        <div className="map-container">
                            {/* Ersätt med din karta */}
                            <div className="map-placeholder">
                                <p className="text-center text-muted">
                                    LÄGG IN KARTA HÄR
                                    <br />
                                    <small>(Google Maps embed)</small>
                                </p>
                            </div>
                            {/* När du har kartan, använd detta istället:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
                className="map-embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;