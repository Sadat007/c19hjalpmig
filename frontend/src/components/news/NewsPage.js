import React, { Component } from "react";
import help from '../../images/help.jpg';
import corona2 from '../../images/corona2.png';
import helping from '../../images/helping.jpg';
import getinspired from '../../images/logo123.png';
import spread from '../../images/spread.jpg';
import stayhome from '../../images/kampanj-covid-19-eng-liggande.png';
import books from '../../images/books.jpg';


class NewsPage extends Component {
    render() {
        return (
            <div class="ourteam" id="news">
                <h1 class="title" >Informations &amp; News</h1>
                <div class="ourteam_wrapper">
                    <div class="team-1 team">
                        <div class="team_members" data-name="nathan john">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                                <img src={corona2}  alt="Team_Images" /></a>
				</div>
                            <div class="team_members" data-name="Alyssa Healy">
                                <a href="https://coronavirus.jhu.edu/map.html"></a>
                                <img src={spread} alt="Team_Images" />
				</div>
                                <div class="team_members" data-name="Alec Stewart">
                                    <a href="https://www.neighbourly.com/blog/5-reasons-helping-other-people-will-help-you/">
                                        <img src={helping} alt="Team_Images" /></a>
				</div>
                                </div>

                                <div class="team-2 team">
                                    <div class="team_members" data-name="Michael Rippon">
                                        <a href="https://www.1177.se/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/covid-19-coronavirus/">
                                            <img src={stayhome} alt="Team_Images" /></a>
				</div>
                                        <div class="team_members" data-name="Meg Lanning">
                                            <a href="https://www.thehighereducationreview.com/news/5-websites-to-read-free-books-amid-quarantine-nid-1313.html">
                                                <img src={books} alt="Team_Images" /></a>
				</div>
                                            <div class="team_members" data-name="Sophie Devine">
                                                <a href="https://www.bbc.com/news/uk-england-51995089">
                                                    <img src={getinspired} alt="Team_Images" style={{ height: "80%"}}/></a>
				</div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                }
                            }
                            
export default NewsPage;