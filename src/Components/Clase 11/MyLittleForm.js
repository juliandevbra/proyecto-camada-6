import React, { Component } from "react";
import Swal from 'sweetalert2'
import './MyLittleForm.css';
import pony from './img/pony.png'

const App = () => <MyLittleForm />;

class MyLittleForm extends Component {
    state = { 
        name: "", 
        domicilio: '', 
        error: false 
    };
    
    handleChange = (event) => {
        this.setState({
            name: event.target.value,
            error: false
        });
        console.log(event);
    }
    handleChangeDomicilio = (event) => {
        this.setState({
            domicilio: event.target.value,
            error: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.name.length === 0)
            this.setState({ error: true});
        else {
            Swal.fire('Hello ' + this.state.name + ' que vive en ' + this.state.domicilio);
            this.setState({ name: ''});
        }
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <img src={pony} alt="Pony" />
                <label>Name</label>
                <input
                    name='name'
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label>Domicilio</label>
                <input type='text' value={this.state.domicilio} name='domicilio' onChange={this.handleChangeDomicilio} />
                {this.state.error && <span>This field is required</span>}
                <button type="submit">Submit!</button>
            </form>
            );
        }
}

export default App;