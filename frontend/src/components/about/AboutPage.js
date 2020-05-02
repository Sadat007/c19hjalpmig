import React, { Component } from "react";

class AboutPage extends Component {
    render() {
        return (
            <div class="container" style={{ padding: "10px" }}>
                <div class="row">
                    <div class="col"></div>
                    <div class="col-8">
                        <div class="card" style={{ width: "700px" }}>
                            <div class="card-body">
                                <h2 class="card-title">About us</h2>
                                <p class="card-text">C19 Hjälp mig is an application to help us pass through this pandemic situation in a better way.
                                    During this time that we need social distancing and avoid go out, specially people more vulnerable - group risk. <br />
                                    With this in mind, we create this website where people who need help can connect to people who can help. </p>
                                <p class="card-text">A person can help a neighbor or someone else doing groceries, going to the pharmacy, collect a pack in the post/box, or even take a pet to go for a walk. </p>
                                <p class="card-text">   Our intention is to connect people, further our values in society, and help go out this situation better then we got in.</p>
                                <br/>
                                <h2 class="card-title">Our Mission</h2>
                                <p class="card-text">Generate a greater sense of community, allowing people to be kind and support each other at a time when cooperation is so necessary, but also to allow those in need to remain in a shelter to be safe.</p>
                                <br/>
                                <br/>
                                <h2 class="card-title">Our Values</h2>
                                <h5 class="card-title">Support</h5>
                                <h6 class="card-subtitle mb-2 text-muted">“Sometimes the only thing you could do for people was to be there.” – Terry Pratchett</h6>
                                <h5 class="card-title">Community</h5>
                                <h6 class="card-subtitle mb-2 text-muted">"We cannot live only for ourselves. A thousand fibers connect us with our fellow men." – Herman Melville</h6>
                                <h5 class="card-title">Cooperation</h5>
                                <h6 class="card-subtitle mb-2 text-muted">United we stand.</h6>
                                <h5 class="card-title">Kindness</h5>
                                <h6 class="card-subtitle mb-2 text-muted"> “Sometimes it takes only one act of kindness and caring to change a person’s life.” – Jackie Chan</h6>
                                <h5 class="card-title">Shelter</h5>
                                <h6 class="card-subtitle mb-2 text-muted">“Everyone is in need of shelter from the storm, be the shelter, be kind.” – Luffina Lourduraj</h6>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            
            </div>

        );
    }
}

export default AboutPage;