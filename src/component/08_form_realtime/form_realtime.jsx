import { Component } from "react";

// Class Component
class Formrealtime extends Component { 
    // Constructor method
    constructor(props) {
        super(props);
        // State Declaration
        this.state = { 
            input: "" 
        };
    }

    // Arrow Function
    handleInputChange = (event) => {
        // Change state value
        this.setState({ 
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Judul: {this.state.input}</h1>
                <input type="text" onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Formrealtime;