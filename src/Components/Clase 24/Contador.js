import React from 'react'

const Contador = ({number, counter, increment}) => {
    console.log(`Contador ${number} renderizado`)
  return (
    <div>
        <h2>Contador {number}</h2>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default React.memo(Contador)