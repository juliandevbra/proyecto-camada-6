import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './pokedex.css'


const Home = ({pokeSel}) => {
  return (
    <>
      <section className='header-container'>
        <Navbar/>
      </section>
      <Outlet/>
    </>
  )
}

export default Home