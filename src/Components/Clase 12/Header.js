import React from 'react'
import './pokedex.css'

const Header = ({pokeSel}) => {

  const getPokemon = () => {
    if (pokeSel.id?.toString()?.length === 1) return `00${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 2) return `0${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 3) return `${pokeSel.id}`
}

  return (
    <div className='header-container'>
      <section className='header-fixed'>
        <h2>Pokemon Seleccionado: {pokeSel.name}</h2>
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`} alt='' />
       
      </section>
    </div>
  )
}

export default Header