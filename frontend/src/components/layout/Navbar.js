import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo123.png";

function Navbar({ onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div >
                <a href="#"><img src={logo} style={{width: "70px", height: "70px", padding: "20px;"}} /></a>
                <a className="navbar-brand" href="#" style={{fontSize: "14px"}}>mig</a>
		    </div>

                <div className="collapse navbar-collapse" id="navbarColor01"  >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">
                                About us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/news" className="nav-link">
                                News
                            </Link>
                        </li>
                </ul>

                    <ul>
                        <li className="nav-item">
                            <Link to="/singin" className="nav-link">
                                Sing in
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
            );
        }
        
export default Navbar;