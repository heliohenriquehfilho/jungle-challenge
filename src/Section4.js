import React, { Component } from 'react';
import Form from './Form';
import Divider from './image/Divider1.png';
const axios = require('axios');

class Section4 extends Component{
    state = {
        characters: [],
    };
    
    handleSubmit = (characters) => {
        this.setState({characters: [...this.state.characters, characters]})
        
        axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
            name:characters.name,
            email: characters.email
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    render () {
        const {characters} = this.state

        return (
            <div className="section4">
                <div className="s4-title">
                    <p> Are you a parent without a nanny and looking to share? </p>
                </div>
                <div className="s4-text">
                    <p> Leave us your name and email and we’ll update you as soon as a share becomes available in your area! </p>
                </div>
                <div className="form">
                    <Form handleSubmit={this.handleSubmit} characterData={characters} />
                </div>
                <div className="divider">
                    <img src={Divider} alt="" />
                </div>
            </div>
        )
    }
}

export default Section4