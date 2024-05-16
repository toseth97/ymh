import { Firestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_Config";
import Logo from "../images/logo.png";

const Nav = ({ mobile, active, setMobile, isAuth, setIsAuth }) => {
    const [pageoffset, setPageoffset] = useState(0);

    window.addEventListener("scroll", () => {
        setPageoffset(window.scrollY);
    });
    const navigate = useNavigate();

    const unactive = (props) => {
        setMobile((current) => (current ? !current : null));
    };

    return (
        <nav
            className={
                pageoffset > 150
                    ? "navigation_wrapper active"
                    : "navigation_wrapper"
            }
        >
            <div className="nav">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>
                <div>
                    <ul className={mobile ? "nav_ul active" : "nav_ul"}>
                        <li onClick={() => unactive("/")} className="nav_li">
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            onClick={() => unactive("about")}
                            className="nav_li"
                        >
                            <Link to="about">About</Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={mobile ? "hamburger active" : "hamburger"}
                    onClick={active}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
