import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [searchPoke, setSearchPoke] = React.useState('')

  useEffect(() => {
      navigate(`/pokemon/${searchPoke}`)
  }, [navigate, searchPoke])
  

  return (
    <nav className='header-fixed'>
      <img src='/assets/pokemon.png' alt='' width={100}/>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/pokemon'><h3>PokeList</h3></Link>
      <Link to='/type'><h3>Tipos</h3></Link>

      <input type='text' value={searchPoke} onChange={(e) => setSearchPoke(e.target.value)}/>
    </nav>
  )
}

export default Navbar