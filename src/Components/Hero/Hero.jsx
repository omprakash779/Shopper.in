import React from "react";
import hand_icon from "../Assets/hello.png";
import hero_image from '../Assets/hero-model.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="latest-btn">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
};

export default Hero;
