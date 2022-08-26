import { useState } from 'react'
import Swal from 'sweetalert'

const NewForm = () => {

    const [ name, setName ] = useState('')
    const [ error, setError] = useState(false)

    const handleChange = (event) =>{
        setName(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(name === '' ){
            setError(true)
        }
        else{
            Swal.fire('Hola ' + name)
            setName('')
            setError(false)
        }

    }

    return(
        <>
        {console.log(name)}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text"   onChange={handleChange}/>
                {error && <p>Completá este casillero</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default NewForm;