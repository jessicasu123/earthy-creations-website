import React, { Component } from 'react'
import Title from '../../components/Title/Title';
import './Team.css';
import duke from '../../images/partners/duke.jpe';
import tulane from '../../images/partners/tulane.png';
import olsen from '../../images/partners/olsen.png';
import sullfdn from '../../images/partners/sullfdn.jpeg';
import bella from '../../images/team/bella.png';
import kat from '../../images/team/kat.png';
import abby from '../../images/team/abby.jpg';
import yellowbox from '../../images/team/yellowbox.png';
import pinkbox from '../../images/team/pinkbox.png';
import orangebox from '../../images/team/orangebox.png';
import group from '../../images/team/group.png';

export default class Team extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <Title text="MEET OUR TEAM" color="orange" />
                </div>
                <div className="row">
                    <div className="person" id="kat-box">
                        <img src= {kat} alt="kat" className="team_img"/>
                        <span class="name kat">Kat Beben</span>
                        <span class="role kat">Co-founder</span>
                    </div>
                    <div className="person" id="bella-box">
                        <img src= {bella} alt="bella" className="team_img"/>
                        <span class="name bella">Bella Almeida</span>
                        <span class="role bella">Founder</span>
                    </div>
                    <div className="person" id="abby-box">
                        <img src= {abby} alt="abby" className="team_img"/>
                        <span class="name abby">Abby Shlesinger</span>
                        <span class="role abby">Co-founder</span>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="person" id="pinkBox">
                        <img src= {pinkbox} alt="pinkbox" className="team_img"/>
                    </div>
                    <div className="person" id="orangeBox">
                        <img src= {orangebox} alt="orangeBox" className="team_img"/>
                    </div>
                    <div className="person" id="yellowBox">
                        <img src= {yellowbox} alt="yellowBox" className="team_img"/>
                    </div>
                </div>


               <div>
                    <div className="kat-d"> 
                        <span class="name">Kat Beben</span>
                        <span class="role">Co-founder</span>
                    </div>
                    <div className="bella-d"> 
                    <span class="name">Bella Almeida</span>
                        <span class="role">Founder</span>
                    </div>
                    <div className="abby-d"> 
                    <span class="name">Abby Shlesinger</span>
                        <span class="role">Co-founder</span>
                    </div>
                
               </div>
                

                <div className="title">
                    <Title text="OUR PARTNERS" color="green" />
                </div>
                <div>
                    <img src= {duke} alt="duke" className="duke"/>
                    <img src= {sullfdn} alt="sullivan foundation" className="sullfdn"/>
                    <img src= {tulane} alt="tulane" className="tulane"/>
                    <img src= {olsen} alt="olsenk" className="olsenk"/>
                </div>

                <div>
                    <img src= {group} alt="group" className="group"/>
                </div>
            </div>
        )
    }
}
