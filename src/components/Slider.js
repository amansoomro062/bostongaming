import React from 'react';
import slider1 from '../images/slider1.jpg';

const Slider = (props) => {
    return (
        <header className="masthead bg-slider text-white text-center">
            <div className="container d-flex align-items-center flex-column slider-text">
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">BOSTON GAMING</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Affordable - Professional - Aesthetic</p>
                
                <p className="masthead-subheading font-weight-light mb-0">Let us build your next rig!</p>
            </div>

        </header>
    );
}
    
    export default Slider;