import React, { Component } from 'react'

export default class ClassDidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Carmela"
        }
    }
        
    componentDidMount(){
        console.log(3, 'El componente está montado')
    }

    componentDidUpdate(){
        console.log(4, 'Componente actualizado')
    }

    componentWillUnmount(){
        console.log(5, 'el componente se desmontó')
    }

  render() {
    return (
      <div>Hola {this.state.name}</div>
    )
  }
}
