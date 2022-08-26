import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Rejuvenecedor = () => {

    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ error, setError] = useState(false)

    const handleChange = (event) =>{
        setName(event.target.value)
        setAge(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(name.length < 1 ){
            setError(true)
        }
        else if(age < 0 ){
            setError(true)
        }
        else{
            setAge(age-10)
            Swal.fire('Hola ' + name + ' Tu nueva edad es ' + age)
            setName('')
            setAge(0)
            setError(false)
        }

    }

    return(
        <>
        {console.log(name)}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text"   onChange={handleChange}/>
                {error && <p>Completá este casillero con al menos un caracter</p>}
                <label htmlFor="">Age</label>
                <input type="text"   onChange={handleChange}/>
                {error && <p>Completá este casillero</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Rejuvenecedor;