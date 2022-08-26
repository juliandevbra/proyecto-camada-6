import {useState} from 'react'
import Swal from 'sweetalert2';

const Rejuvenecedor =()=>{
    
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(nombre ==='' || edad < 0){
            setError(true);
        } else{
            const newEdad = edad-10;
            Swal.fire("Nombre: " + nombre + " Edad: " + newEdad);
            setNombre("");
            setEdad("");
            setError(false);
            console.log("Submitted");
        }
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                <br/>
                    <label htmlFor="">Nombre </label> <br/><br/>
                    <input type="text" value={nombre}  onChange={(event) => setNombre(event.target.value)} required/> <br/><br/>
                    {error && <p>Completa este casillero</p>}
                    <label htmlFor="">Edad </label> <br/><br/>
                    <input value={edad} type="int" onChange={(event) => setEdad(event.target.value)} required/> <br/><br/>
                    {error && <p>Completa este casillero</p>}
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    
}

export default Rejuvenecedor;