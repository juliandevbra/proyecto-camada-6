import React from 'react'
import PokeList from './PokeList'
import useFetch from './useFetch'
import useInput from './useInput'

const Home = ({loading, stock}) => {
    
    loading = true
    const mensaje = useInput('text')
    const name = useInput('text')
    const tel = useInput('number')
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    const lista = useFetch(url)
    console.log(lista)

  return (
    <div>
        <p>{mensaje.value}</p>
        <input {...mensaje}/>
        <p>{name.value}</p>
        <input {...name}/>
        <p>{tel.value}</p>
         <input {...tel} />
         <PokeList/>
    </div>
  )
}

export default Home