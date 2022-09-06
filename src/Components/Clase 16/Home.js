import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>This is the HOME Page</h1>
        {/* Ejemplo con Outlet */}
        <ul>
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to='/'><p>Home</p></Link>
            <h3 onClick={() => navigate('/about')}>About</h3>
            <Link to='/contacto'>Contact</Link>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Home