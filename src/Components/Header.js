import React from 'react'
import logo from "../assets/images/logo/logo.png";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

function Header() {
    return (
        <header id="header" data-menu-padding={28} data-sticky-menu-padding={8}>
            <div id="header-wrap">
                <div className="container">
                    <div className="header-row">
                        <div id="logo">
                            <a href="index.html" className="standard-logo logo_img"><img src={logo} alt="Canvas Logo" /></a>
                            <a href="index.html" className="retina-logo logo_img"><img src={logo} alt="Canvas Logo" /></a>
                        </div>
                        <div id="primary-menu-trigger">
                            <svg className="svg-trigger" viewBox="0 0 100 100">
                                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
                                </path>
                                <path d="m 30,50 h 40" />
                                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
                                </path>
                            </svg>
                        </div>
                        <nav className="primary-menu style-3 menu-spacing-margin">
                            <ul className="menu-container">
                                <li className="menu-item xcurrent"><span  >
                                    <a href="/home" className="menu-link">
                                        <div>Home</div>
                                    </a>
                                </span></li>
                                <li className="menu-item "><span>
                                    <Link to="/about" className="menu-link" >
                                        <div>About Us</div>
                                    </Link>
                                </span></li>
                                <li className="menu-item "><span>
                                    <Link to="/new" className="menu-link" >
                                        <div>New</div>
                                    </Link>
                                </span></li>
                                <li className="menu-item"><span >
                                    <Link to="/services" className="menu-link">
                                        <div>Services</div>

                                    </Link>
                                </span></li>
                                <li className="menu-item"><span >
                                    <Link to="/gallery" className="menu-link">
                                        <div>Gallery</div>
                                    </Link>
                                </span></li>
                                {/* <li className="menu-item"><a className="menu-link" href="demo-medical-doctors.html">
                                    <div>Doctors</div>
                                </a>
                                    <ul className="sub-menu-container">
                                        <li className="menu-item"><a className="menu-link" href="demo-medical-doctors-lists.html">
                                            <div>2 columns - List style</div>
                                        </a></li>
                                        <li className="menu-item"><a className="menu-link" href="demo-medical-doctors-3.html">
                                            <div>3 columns</div>
                                        </a></li>
                                        <li className="menu-item"><a className="menu-link" href="demo-medical-doctors.html">
                                            <div>4 columns</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a className="menu-link" href="demo-medical-blog.html">
                                    <div>Blog</div>
                                </a></li>
                                <li className="menu-item"><a className="menu-link" href="demo-medical-contact.html">
                                    <div>Contact</div>
                                </a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="header-wrap-clone" />
        </header>
    )
}

export default Header