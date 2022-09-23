import React, { useCallback, useState } from 'react'
import Contador from './Contador'

const UseCallback = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])
    const increment2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])

  return (
    <div>
        <Contador number={1} counter={count1} increment={increment1}/>
        <Contador number={2} counter={count2} increment={increment2}/>
    </div>
  )
}

export default React.memo(UseCallback)