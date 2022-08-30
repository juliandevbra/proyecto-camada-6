import React from 'react'
import './pokedex.css'

const SelectPj = ({pokedex, setPokeSel}) => {

  return (
    <div className='select-poke'>
      {pokedex.map(poke => <p className='poke'
        onClick={() =>  setPokeSel(poke)}
      >{poke.id} - {poke.name}</p>)}
    </div>
  )
}

export default SelectPj