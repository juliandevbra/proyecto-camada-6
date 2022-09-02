import {useState, useEffect} from 'react'
import axios from 'axios'
import './UseEffect.css'

const UseEffect = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    // const url = 'https://api.thecatapi.com/v1/images/search'
    // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

    const [imagen, setImagen] = useState(null)
    const [cambio, setCambio] = useState(false)

    // Ejemplo con .then()
    useEffect(() => {
     fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setImagen(data.message)
            })
            .catch((err) => console.log(err))
    }, [cambio])

    //Ejemplo con axios
    // useEffect(() => {
    //     const fetchData = () => {
    //         axios.get(url)
    //         .then(response => {
    //             console.log(response)
    //             setImagen(response.data.message)
    //         })
    //     }
    //     fetchData()
    // }, [cambio])

    return (
        <div>
            <img src={imagen} alt='' style={{widht: 300, height: 300}}/>
            <button onClick={() => setCambio(!cambio)} className='boton'>MIAU</button>
        </div>
    )
}

export default UseEffect