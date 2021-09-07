import React, { Component } from 'react';
import ImageSection3 from './image/ImageSection1.png';
import Divider from './image/Divider1.png';

class Section3 extends Component{
    render () {
        return (
            <div className="section3">
                <div className="container">
                    <div className="s3-block-1">
                        <div className="s3-title">
                            <p> Share your home, nanny and costs </p>
                        </div>
                        <div className="s3-text">
                            <p> You have a fantastic home, a fantastic nanny and wouldn’t 
                                cutting your costs in half be, well, fantastic?! If only it was 
                                easy to connect with other parents to share your costs? 
                                Well now it is, with Hapu. Hapu means tribe and it’s our 
                                foundational 3 tribal principles that empowers you to 
                                create and manage your own tribe. A tribe that together 
                                has the power to create new affordable solutions in 
                                childcare that work for you and your community. </p>
                        </div>
                        <div className="s3-link">
                            <p> Ready to get started? </p>
                        </div>
                    </div>
                    <div className="s3-block-2">
                        <img src={ImageSection3} alt=""></img>
                    </div>
                </div> 
                <div className="divider">
                    <img src={Divider} alt="" />
                </div>
            </div>
        )
    }
}

export default Section3