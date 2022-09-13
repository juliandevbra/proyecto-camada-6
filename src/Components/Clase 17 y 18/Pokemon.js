import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'
import pokeloader from './pokemongo.gif'

const Pokemon = ({loading, setLoading}) => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`

    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPoke(res.data)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
        })
    }, [url, setLoading])

  return (
    <div className='poke-info'>
      {console.log(loading)}
      {loading ? 
        <img src={pokeloader} alt='' style={{margin: 'auto'}}/>
        : 
        <div className='poke-stats'>     
          <h3>{poke.name}</h3>
          <img src={poke.sprites?.front_default} alt=''/>
        </div>
      }    
      </div>
  )
}

export default Pokemon