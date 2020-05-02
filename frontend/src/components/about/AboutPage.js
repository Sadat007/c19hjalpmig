import React, { Component } from "react";

class AboutPage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">About Us</h4>
                    <p>Our website, C-19 Hjälp mig, exists to generate a greater sense of community,
                     allowing people to be kind and support each other at a time when cooperation is so necessary,
                     but also to allow those in need to remain in a shelter to be safe .</p>
                     <p>C19 Hjälp mig is an application to help us pass through this pandemic situation in a better way.
                     During this time that we need social distancing and avoid go out, specially people more vulnerable - group risk.
                     With this in mind, we create this website where people who need help can connect to people who can help.
                     A person can help a neighbor or someone else doing groceries, going to the pharmacy, collect a pack in the post/box, or even take a pet to go for a walk.
                     Our intention is to connect people, further our values in society, and help go out this situation better then we got in.</p>

                </div>
            </div>
        );
    }
}

export default AboutPage;