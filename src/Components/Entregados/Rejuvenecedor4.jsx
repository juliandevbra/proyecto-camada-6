import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Rejuvenecedor = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const handleChangeName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleChangeAge = (e) => {
        setAge(e.target.value)
        console.log(age)
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        if (!name || age < 0) {
            Swal.fire('Favor revise los datos')
        } else {
            const newAge = age - 10
            Swal.fire('Hola ' + name + ' tu nueva y feliz edad es ' + newAge)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <form> */}
                <label htmlFor='name'>Ingrese su nombre:</label>
                <input
                    type='text'
                    name='name'
                    onChange={handleChangeName}
                    value={name}
                />
                <label htmlFor='age'>Ingrese su edad:</label>
                <input
                    type='number'
                    name='age'
                    onChange={handleChangeAge}
                    value={age}
                />
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Rejuvenecedor
