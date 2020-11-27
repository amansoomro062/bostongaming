import React from 'react';
// import {logo} from '../images/logo.png';
import logo from '../images/logo.png'; // Tell webpack this JS file uses this image

const Navbar = (props) => {
    return (
       
        
        <nav className="navbar navbar-expand-lg bg-light text-uppercase fixed-top" id="mainNav" > 
          <div className="container">
          
                {/* Image for LOGO */}
                <img src={logo} width="55"/>    
                <a className="navbar-brand js-scroll-trigger" href="#">
                    {/* LOGO TEXT */}
                    <span>
                        Boston Gaming
                    </span>
                </a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#products">Products</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#rig">Design Your Own</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;