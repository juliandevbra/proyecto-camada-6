import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    // console.log(params)

    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPoke(res.data)
        })
    }, [url])

  return (
    <div>
        <h1>{params.pokeName}</h1>
        <h1>{poke.name}</h1>
        <img src={poke.sprites.front_default} alt=''/>
    </div>
  )
}

export default Pokemon