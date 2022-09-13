import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const PokeList = ({loading, setLoading}) => {

  const [pokeList, setPokeList] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

  useEffect(() => {
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setPokeList(res.data.results)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
     
    })
  }, [setLoading, loading])

  return (
    <>
      <div className='select-poke'>
        {pokeList.map((poke, index) => 
          <Link key={index} to={`${poke.name}`}> 
            <p onClick={() => setLoading(true)} className='poke-name'>{poke.name}</p >
          </Link>  
        )}
      </div>
      <Outlet/>
    </>
  )
}

export default PokeList