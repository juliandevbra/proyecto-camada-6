import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './pokedex.css'


const Home = ({loading, setLoading}) => {
  return (
    <>
      <section className='header-container'>
        <Navbar loading={loading} setLoading={setLoading}/>
      </section>
      <Outlet/>
    </>
  )
}

export default Home