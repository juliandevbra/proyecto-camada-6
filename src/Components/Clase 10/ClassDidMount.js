import React, { Component } from 'react'

export default class ClassDidMount extends Component {
    constructor(props){
        super(props)
        console.log(1, 'Acá se ejecuta el constructor')
        this.state = {
            hora: new Date(),
            contador: 0,
            misProps: null
        }
        
        this.incrementar = this.incrementar.bind(this);
        this.temporizador = null;
    }
    incrementar() {
        this.setState({contador: this.state.contador + 1});
    }


    
   componentDidMount(){
        this.setState({misProps: this.props})
        console.log(3, 'El componente está montado')
    }

    componentDidUpdate(){
        console.log(4, 'Componente actualizado')
    }

    componentWillUnmount(){
        console.log('el componente se desmontó')
    }
 
  render() {
        console.log(2, 'Acá se ejecuta el render')
        // setInterval(() => this.setState({hora: new Date()}), 1000)

    return (
        <div>
            <h1>{this.state.contador}</h1>
            {/* <p>{this.state.hora.toLocaleTimeString()}</p> */}

            <button onClick={this.incrementar}>Incrementar</button>
            <h1>{this.state.message === true ? 'Incremenaste el contador' : null}</h1>
        </div>
    )
  }
}
