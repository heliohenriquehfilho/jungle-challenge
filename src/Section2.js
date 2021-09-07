import React, { Component } from 'react';
import ProfileImage from './image/ProfileImage.png'

class Section2 extends Component {
    render () {
        return (
            <div className="section2">
                <div className="s2-profile-image">
                    <img src={ProfileImage} alt=""></img>
                </div>
                <div className="section-2-text-1">
                    <p> Sarah’s day care available now in North Sydney </p>
                </div>
                <div className="section-2-text-2">
                    <p> Wednesday, Thursday, Friday - 7:30 - 5:30 </p>
                </div>
            </div>
        )
    }
}

export default Section2