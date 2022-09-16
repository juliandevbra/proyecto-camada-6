import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({loading, setLoading}) => {

  const navigate = useNavigate()
  const [searchPoke, setSearchPoke] = React.useState('')

  const search = (e) => {
      e.preventDefault()
      setLoading(true)
      navigate(`/pokemon/${searchPoke}`)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }
  

  return (
    <nav className='header-fixed'>
      <img src='/assets/pokemon.png' alt='' width={100}/>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/pokemon'><h3>PokeList</h3></Link>
      <Link to='/type'><h3>Tipos</h3></Link>

      <form onSubmit={search}>
        <input type='text' value={searchPoke} onChange={(e) => setSearchPoke(e.target.value)}/>
        <button>🔍</button>
      </form>

    </nav>
  )
}

export default Navbar