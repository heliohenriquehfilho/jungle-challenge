import React, { Component } from 'react';
import Calendar from './image/Calendar.png'
import {ReactComponent as Logo} from './image/Logo.svg';
import Facebook from './image/Facebook.png';
import Twitter from './image/Twitter.png';
import Instagram from './image/Instagram.png';

class Section8 extends Component {
    render () {
        return (
            <div className="section8">
                <div className="s8-container">
                    <div className="s8-title">
                        <p> Become a nanny share host </p>
                    </div>
                    <div className="s8-text">
                        <p> Takes less than 5 minutes to get started </p>
                    </div>
                    <div className="s8-button">
                        <div className="s8-button-image">
                            <img src={Calendar} alt="" />
                        </div>
                        <div className="s8-button-writte">
                            <div className="s8-button-title">
                                <p> Create Your Nanny Share </p>
                            </div>
                            <div className="s8-button-text">
                                <p> Takes less than 5 minutes </p>
                            </div>
                        </div>
                    </div>
                    <div className="s8-link">
                        <p> Or browse local nanny-shares </p>
                    </div>
                </div>
                <div className="footer">
                    <footer>
                        <ul>
                            <li className="footer-li-1"> <Logo /> </li>
                            <div className="group-1">
                                <li className="footer-li-2"> Share Your Nanny </li>
                                <li className="footer-li-3"> Our Story </li>
                            </div>
                            <div className="group-2">
                                <li className="footer-li-4"> Blog </li>
                                <li className="footer-li-5"> Terms & Privacy </li>
                            </div>
                            <div className="group-3">
                                <li className="footer-li-6"> <img src={Facebook} alt="" /> </li>
                                <li className="footer-li-7"> <img src={Twitter} alt="" /> </li>
                                <li className="footer-li-8"> <img src={Instagram} alt="" /> </li>
                            </div>
                        </ul>
                    </footer>
                </div>
                <div className="copyright">
                    <p> Copyright © 2017 Hapu PTY Limited All rights reserved </p>
                </div>
            </div>
        )
    }
}

export default Section8