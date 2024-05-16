import React, { useState, useEffect } from "react";

import FrontPage from "../images/image1.jpg";
import Logo from "../images/logo.png";

const FrontDisplay = ({ count, setCount, prevImg, nextImg, data }) => {
    //<img className='img_change' src={url} alt={url}/>
    return (
        <div className="front_display h-screen flex flex-col items-center justify-center">
            <img src={Logo} alt="logo" />
            <div className="text_hero text-center">
                <h2>YOUNG MINISTERS HUB</h2>
                <p> Learning and growing for global impact</p>
            </div>
        </div>
    );
};

export default FrontDisplay;
