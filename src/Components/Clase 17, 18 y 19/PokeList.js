import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const PokeList = ({loading, setLoading}) => {

  const [pokeList, setPokeList] = useState([])
  const [cantidad, setCantidad] = useState(2)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

  let wid = window.innerWidth
  let hei = window.innerHeight

  useEffect( () => {
    // Ejemplo con then
    axios.get(url)
    .then(res => {
      setPokeList(res.data.results)
    })
    .catch(err => console.log(err))

    //Ejemplo con async/await y try&catch
    const fetchData =  async () => {
      try{
        const response = await axios.get(url)
        setPokeList(response.data.results)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
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