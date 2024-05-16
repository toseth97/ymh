import React from "react";
import Logo from "../images/logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

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
                    <p>Counsel and Advice</p>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/youngministershub?igsh=MTlyZXMybWNuZ3JuOA==">
                        <FaInstagramSquare
                            style={{ fontSize: "50px", color: "crimson" }}
                        />
                    </a>
                    <a href="https://youtube.com/@youngministershub?si=vYsaoacsqZm59tNu">
                        <FaYoutube style={{ fontSize: "50px", color: "red" }} />
                    </a>
                </div>
            </main>
            <p>copyright &copy; {myDate.getFullYear()}, All rights reserved </p>
        </footer>
    );
};

export default Footer;
