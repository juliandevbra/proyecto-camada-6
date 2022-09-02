import {useState, useEffect} from 'react'


const UseEffect = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    // const url = 'https://api.thecatapi.com/v1/images/search'
    // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

    const [imagen, setImagen] = useState(null)
    const [cambio, setCambio] = useState(false)

     //Ejemplo con try y async await
     useEffect(() => {
        try{
            const fetchData = async () =>  {
                let response = await fetch(url)
                let data = await response.json()
                console.log(data)
            }
            fetchData();
        }
        catch(err) {
            return console.log(err) 
        }
    }, [cambio])

    return (
        <div>
            <img src={imagen} alt='' style={{widht: 300, height: 300}}/>
            <button onClick={() => setCambio(!cambio) } className='boton'>MIAU</button>
        </div>
    )
}

export default UseEffect