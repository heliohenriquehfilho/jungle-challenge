import React, {Component} from 'react';

class Form extends Component {

    initialState = {
        name: '',
        email: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render () {
        const {name, email} = this.state;

        return (
            <form>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Your Name" />
                <input
                    type='text'
                    name="email"
                    id='email'
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Your Email" />
                <button className="form-button"
                    onClick={this.submitForm} > Send </button>
                    
            </form>
        )
    }
}

export default Form