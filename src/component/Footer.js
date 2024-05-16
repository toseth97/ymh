import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
    let myDate = new Date();
    return (
        <footer>
            <main data-aos="fade-in" className="footer">
                <img src={Logo} alt="logo" />
                <div className="footer_features">
                    <h2>Young Ministers Hub</h2>
                    <p>Salvation</p>
                    <p>Deliverance</p>
                    <p>Undiluted word of God</p>
                    <p>Councel and Advice</p>
                </div>
                <div className="social">
                    <a href="" target="_blank">
                        <i className="bx bxl-facebook-square"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                    <a href="https://wa.me/+2348085075678" target="_blank">
                        <i className="bx bxl-whatsapp-square"></i>
                    </a>
                </div>
            </main>
            <p>copyright &copy; {myDate.getFullYear()}, All rights reserved </p>
        </footer>
    );
};

export default Footer;
