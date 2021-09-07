import React, { Component } from 'react';
import ImageSection6 from './image/ImageSection4.png'
import Divider from './image/Divider1.png';

class Section6 extends Component {
    render () {
        return (
            <div className="section6">
                <div className="s6-title">
                    <p> A framework built for the long term </p>
                </div>
                <div className="s6-text">
                    <p> Childcare is for the long term. And you need a framework you can count on that gives your share long 
                        term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly 
                        defined process, transparency over money and equality of participation. </p>
                </div>
                <div className="s6-link">
                    <p> Read how Hapu’s tribal background defines our app  </p>
                </div>
                <div className="s6-image">
                    <img src={ImageSection6} alt="" />
                </div>
                <div className="divider">
                    <img src={Divider} alt="" />
                </div>
            </div>
        )
    }
}

export default Section6