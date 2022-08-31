import React from 'react'
import './Shop.css'

const Header = ({total}) => {
  return (
    <div className='header'>
        <h2>Bienvenidos al pokeShop!</h2>
        <h4>Productos seleccionados: </h4>
        <h4>Precio total: $</h4>
    </div>
  )
}

export default Header