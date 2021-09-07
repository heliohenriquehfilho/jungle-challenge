import React, { Component } from 'react';
import ImageSection5 from './image/ImageSection3.png';
import Divider from './image/Divider1.png';

class Section5 extends Component{
    render () {
        return (
            <div className="section5">
                <div className="continainer-s5">
                    <div className="image-s5">
                        <img src={ImageSection5} alt="" />
                    </div>
                    <div className="s5-written">
                        <div className="s5-title">
                            <p> Shared payments made simple </p>
                        </div>
                        <div className="s5-text">
                            <p> Sometimes it’s hard enough just sharing a restaurant bill. Try 
                                sharing that bill week in, week out and you might encounter 
                                more than a few snares. But not with Hapu. Simply set your 
                                rates and our automated payment system takes care of the 
                                rest. You need never talk money or who owes what. </p>
                        </div>
                        <div className="s5-link">
                            <p> Read how Bridget’s share (without Hapu) ended over $15 </p>
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <img src={Divider} alt="" />
                </div>
            </div>
        )
    }
}

export default Section5