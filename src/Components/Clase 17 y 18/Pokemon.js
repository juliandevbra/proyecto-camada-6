import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'

const Pokemon = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`

    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPoke(res.data)
        })
    }, [url])

  return (
    <div className='poke-info'>
        <h3>{params.pokeName}</h3>
        <h3>{poke.name}</h3>
        <img src={poke.sprites?.front_default} alt=''/>
    </div>
  )
}

export default Pokemon