import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pokedex.css'

const PokeType = () => {

  const [types, setTypes] = useState([])
  const [error, setError] = useState('')
  const url = 'https://pokeapi.co/api/v2/type'

  useEffect(() => {
    //Ejemplo con then
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setTypes(data.results)
    })
    .catch(err => setError(err.toString()))

    //Ejemplo con async/await 
    
      const fetchData = async () =>{
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setTypes(data.results)
      }
      catch (err) {
        setError(err.toString())
      }
      }
      fetchData()
    
    
  }, [])

  return (
    <div className='select-poke'>
      {error}
      {types.map((type, index) => <p key={index} className='poke-name'>{type.name}</p >)}
    </div>
  )
}

export default PokeType