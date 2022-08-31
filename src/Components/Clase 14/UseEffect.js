import {useState, useEffect} from 'react'
import './UseEffect.css'


const UseEffect = () => {
    // const url = 'https://dog.ceo/api/breeds/image/random'
    const url = 'https://api.thecatapi.com/v1/images/search'
    // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0'

    const [imagen, setImagen] = useState(null)
    const [cambio, setCambio] = useState(false)

    useEffect(() => {
        console.log('Componente actualizado')
        fetch(url)
        .then((response) => response.json())
        .then((data) => setImagen(data[0].url))
    }, [cambio])

    return (
        <div>
            <img src={imagen} alt='' style={{widht: 300, height: 300}}/>
            <button onClick={() => setCambio(!cambio) } className='boton'>MIAU</button>
        </div>
    )
}

export default UseEffect