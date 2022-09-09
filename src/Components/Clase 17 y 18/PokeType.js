import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pokedex.css'

const PokeType = () => {

  const [types, setTypes] = useState([])
  const url = 'https://pokeapi.co/api/v2/type'

  useEffect(() => {
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setTypes(res.data.results)
    })
  }, [])

  return (
    <div className='select-poke'>
      {types.map((type, index) => <p key={index} className='poke-name'>{type.name}</p >)}
    </div>
  )
}

export default PokeType