import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {name: '', surname: ''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({name: event.target.value});
    }

    handleChange2(event) {
        this.setState({surname: event.target.value});
    }

    handleSubmit(event) {
        alert('Jusu ivesta informacija: ' + this.state.name + " " + this.state.surname);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange1} />
                </label>
                <label>
                    Surname:
                    <input type="text" value={this.state.surname} onChange={this.handleChange2} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;