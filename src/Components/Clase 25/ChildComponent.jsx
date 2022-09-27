import React from 'react'
import { useGlobalStates } from './Context'

const ChildComponent = () => {

  const { salario, setSalario } = useGlobalStates() 

  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por mes?</p>
        <h3>Salario: {salario} </h3>
        <button onClick={() => setSalario(prev => prev + 25000)}>Pedir aumento</button>
    </div>
  )
}

export default ChildComponent
