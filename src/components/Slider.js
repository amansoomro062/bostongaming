import React, { Component } from 'react';
// used a component available on npm
//to avoid re-inventing the wheel
//https://github.com/femioladeji/react-slideshow
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:5039/`
})
const imageURL = 'http://localhost:5039/images/slider/';


class Slider extends Component {

    state = {
        image1: 'no',
        image2: 'no',
        image3: 'no',
        image4: 'no',   
    }
    constructor() {
        super();
        this.getSlider();
    }
    getSlider = async () => {        
        try {
            let data = await api.get('/slider').then(({ data }) => data);
            // console.log(this.state.image1);
            // this.setState({ slider: data })
            console.log("done with initialization");
            this.setState({
                image1 : 'http://localhost:5039/images/slider/'+data[0].sliderimage,
                image2 : 'http://localhost:5039/images/slider/'+data[1].sliderimage,
                image3 : 'http://localhost:5039/images/slider/'+data[2].sliderimage,
                image4 : 'http://localhost:5039/images/slider/'+data[3].sliderimage,
            })
            // console.log(data[0].sliderimage);
            // console.log(this.state.image1);
        } catch (err) {
            console.log(err);
        }
    }


    render () {
        // const img1 = this.state.image1;
        // const img2 = this.state.image2;
        // const img3 = this.state.image3;
        // const img4 = this.state.image4;
        return (
            <header className=" bg-slider text-white text-center">
                {/* <div className="slide-container"> */}
                <Slide>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.state.image1})` }}>
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
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.state.image2})` }}>
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
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.state.image3})` }}>
                            {console.log(this.state.image3)}
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
                        </div>
                    </div>
                    
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.state.image4})` }}>
                            {console.log(this.state.image3)}
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
                        </div>
                    </div>
                </Slide>
                {/* </div> */}
                {/* <div className="container d-flex align-items-center flex-column slider-text">
                    <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                    <h1 className="masthead-heading text-uppercase mb-0">BOSTON GAMING</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Affordable - Professional - Aesthetic</p>
                    
                    <p className="masthead-subheading font-weight-light mb-0">Let us build your next rig!</p>
                </div> */}
    
            </header>
        );
    }

}

export default Slider;