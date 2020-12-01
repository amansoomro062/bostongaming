import React, { useState, useEffect }  from 'react';
// 
import axios from "axios";


const About = (props) => {

    const [about, setAbout] = useState([]);
    //below
    useEffect(() => {
      axios.get(`http://localhost:5039/about`).then(res => {
        const about = res.data;
        setAbout(about);
        // console.log(about);
      });
    }, []);

    return (
        <section className="page-section bg-secondary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">
                        {/* here we will show content 1 */}
                        {about["content1"]}
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">
                            {/* hree we will show content 2 */}
                            {about["content2"]}
                        </p>
                    </div>
                </div>
            </div>
        </section>  
        );
    }
    
export default About;