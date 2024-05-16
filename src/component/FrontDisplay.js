import React, { useState, useEffect } from "react";
import DisplayImg from "./DisplayImg";
import FrontPage from "../images/image1.jpg";

const FrontDisplay = ({ count, setCount, prevImg, nextImg, data }) => {
    //<img className='img_change' src={url} alt={url}/>
    return (
        <div className="front_display h-screen flex flex-col items-center justify-center">
            <h1>YOURSELF AND GOD</h1>
            <p>
                Who shall separate us from the love of Christ? Shall
                tribulation, or distress, or persecution, or famine, or
                nakedness, or danger, or sword?
            </p>
        </div>
    );
};

export default FrontDisplay;
