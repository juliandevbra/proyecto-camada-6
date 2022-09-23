import React from 'react'

const useInput = (type) => {
    const [value, setValue] = React.useState()
    
    const onChange = (e) =>{
        setValue(e.target.value)
    }

  return {
      type,
      value,
      onChange
  }
}

export default useInput