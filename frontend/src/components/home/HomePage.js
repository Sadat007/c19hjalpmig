import React, { Component } from "react";
import homePageCard1 from './../../images/homePageCard1.jpeg';
import homePageCard2 from './../../images/homePageCard2.jpeg';
import homePageCard3 from './../../images/homePageCard3.jpeg';
import './home.css';

class HomePage extends Component {
    render() {
        return (
            <div className="container m-0 p-0 ruby" style={{ maxWidth:"none"}}>
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <div className="banner-text">
                                <h1>Simple.Easy</h1>
                                <h1>For EveryOne</h1>
                                <p>Our website, C-19 Hjälp mig, exists to generate a 
                                    greater sense of community, allowing people to be kind and 
                                    support each other at a time when cooperation
                                    is so necessary, but also to allow those 
                                    in need to remain in a shelter to be safe </p>

                                <p> We cant help everyone but everyone can help someone</p>
                                <button className="btn btn-outline-info text-uppercase">signup here</button>
                                


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-1 m-3 ">
                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                            <img src={homePageCard1} alt="aaa" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-titel text-capitalize text-info">get help</h5>
                                <p className= "card-text"> Feel free to get help from people welling to help you.</p>
                                <button className="btn btn-outline-info text-uppercase">view more</button>

                            </div>
                            
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                            <img src={homePageCard2} alt="aaa" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-titel text-capitalize text-info">help others</h5>
                                <p className= "card-text">Be a volunteer to Help people who are in need.</p>
                                <button className="btn btn-outline-info text-uppercase">view more</button>

                            </div>
                            
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                            <img src={homePageCard3} alt="aaa" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-titel text-capitalize text-info">Covid 19</h5>
                                <p className= "card-text">C-19 Hjälpemig will help during this pendemic in all possible way</p>
                                <button className="btn btn-outline-info text-uppercase">view more</button>

                            </div>
                            
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default HomePage;