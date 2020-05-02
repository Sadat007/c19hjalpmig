import React from "react";
import { Link , Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import logo from "../../images/logo123.png";

import HomePage from "../../components/home/HomePage";
import ContactUsPage from "../../components/contact/ContactUsPage";
import NewsPage from "../../components/news/NewsPage";
import LoginPage from "../../components/auth/LoginPage";

function Navbar({ onLogout }) {
    return (
        <Router>
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
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link" >
                               Contact Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/news" className="nav-link">
                                News
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                Login/Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                </div>
        </nav>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/signup" component={LoginPage} />
        </Switch>
        </Router>
            );
            
        }
        
        
export default Navbar;