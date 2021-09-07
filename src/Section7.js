import React, { Component } from 'react';
import Section7Image from './image/ImageSection5.png'

class Section7 extends Component {
    render () {
        return (
            <div className="section7">
                <div className="s7-image">
                    <img src={Section7Image} alt="" />
                </div>
                <div className="s7-title">
                    <p> Coming soon: Nanny Share Daily Diary! </p>
                </div>
                <div className="s7-text">
                    <p> With the Hapu daily diary your nanny will be able to update you and your sharers with photos and 
                        commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the 
                        daily adventures fo your little ones. We can’t wait! </p>
                </div>
            </div>
        )
    }
}

export default Section7