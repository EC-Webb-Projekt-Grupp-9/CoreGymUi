import React from "react";
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import gymTraining from '../../assets/images/gymtraining.svg'

const Booking = () => {
    return (
        <>
            <Hero
                title="Boka Pass"
                backgroundImage={gymTraining}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h2>Bokningsformulär kommer här</h2>
                        <p>Här kommer bokningsfunktionaliteten att implementeras.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;

