import React from 'react'
import './Index.css'
import Hero from '../Hero/Hero'
import InfoSection from '../InfoSection/InfoSection'
import ContactSection from '../Contact/ContactSection'
import Footer from '../Footer/Footer'
import gymTraining from '../../assets/images/gymtraining.svg'

const Index = () => {
    return (
        <section className="startsida-container">
            <Hero
                title="Välkommen till Core Gym Club"
                backgroundImage={gymTraining}
            />
            <InfoSection />
            <ContactSection />
            <Footer />
        </section>
    )
}

export default Index

