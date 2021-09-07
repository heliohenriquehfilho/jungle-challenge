import React, { Component } from 'react';
import Badge from './image/Badge.png';
import PlayButton from './image/Play button.png';
import ImageHeader from './image/ImageHeader.png';

class Section1 extends Component {
    render () {
        return(

            <div className="section1">
                <div className="nav">
                    <nav>
                        <ul>
                            <li className="nav-ul-li1"> <img src={Badge} alt=""></img> </li>
                            <li className="nav-ul-li2"> Create Your Nanny Share </li>
                            <li className="nav-ul-li3"> Browse Shares </li>
                            <li className="nav-ul-li4"> Our Story </li>
                            <li> <button className="nav-button"> Become a Nanny Share Host </button> </li>
                            <li className="nav-ul-li6"> Sign In </li>
                        </ul>
                    </nav>
                </div>
                <div className="header">
                    <div className="header-written">
                        <div className="header-title">
                            <p> Easily create or join a local nanny share with Hapu </p>
                        </div>
                        <div className="header-text">
                            <p> Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare. </p>
                        </div>
                        <div className="header-play">
                            <div className="play-button">
                                <img src={PlayButton} alt="" />
                            </div>
                            <div className="play-link">
                                <p> See hapu in action (27 seconds) </p>
                            </div>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src={ImageHeader} alt="" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Section1;