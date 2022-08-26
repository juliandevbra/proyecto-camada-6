import React, { useState } from 'react'

const FunctionState = () => {
  const  [ state, setState ] = React.useState({
    contador: 0
  })

  const incrementar = () => {
    setState({contador: state.contador + 1})
  }

  return (
    <div>{state.contador}
    {console.log(useState())}
      <button onClick={incrementar} >Incrementar</button>
    </div>
  )
}

export default FunctionState