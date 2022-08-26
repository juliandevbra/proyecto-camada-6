import React from 'react'

const Header = ({pokeSel}) => {

  const getPokemon = () => {
    if (pokeSel.id?.toString()?.length === 1) return `00${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 2) return `0${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 3) return `${pokeSel.id}`
}

  return (
    <div>
      <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`} alt='' />
      Pokemon Seleccionado: {pokeSel.name}
    </div>
  )
}

export default Header