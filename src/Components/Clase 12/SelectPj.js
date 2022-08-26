import React from 'react'

const SelectPj = ({pokedex, setPokeSel}) => {

  return (
    <div>
      {pokedex.map(poke => <p 
        onClick={() =>  setPokeSel(poke)}
      >{poke.name}</p>)}
    </div>
  )
}

export default SelectPj