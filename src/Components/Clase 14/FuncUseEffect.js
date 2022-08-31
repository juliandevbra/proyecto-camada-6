import React, { useEffect, useState } from 'react'

const FuncUseEffect = () => {
    const [name, setName] = useState('Pablo')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Contador se actualizó')
        return () => console.log('Componente de función desmontado')
    }, [count])

  return (
    <div>
        Hola {name}!
        <h1>{count}</h1> 
        <button onClick={() => setCount(count + 1)}>SUMAR</button>
    </div>
  )
}

export default FuncUseEffect