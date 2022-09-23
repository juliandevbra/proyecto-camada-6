import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'

const Pokemon = ({loading, setLoading}) => {
  
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`

    const [poke, setPoke] = useState({})
    

  return (
    <div className='poke-info'>
      {loading ? 
        <img src='/assets/pokemongo.gif' alt='' style={{margin: 'auto'}}/>
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