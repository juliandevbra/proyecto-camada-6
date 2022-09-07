import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to='/'><p>Home</p></Link>
      <Link to='/pokemon'><p>PokeList</p></Link>
      <Link to='/type'><p>Tipos</p></Link>
    </nav>
  )
}

export default Navbar