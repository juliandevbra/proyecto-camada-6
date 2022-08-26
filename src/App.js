import './App.css';
import { useState } from 'react';
import SelectPj from './Components/Clase 12/SelectPj';
import Header from './Components/Clase 12/Header';
import pokedex from './pokedex.json'

function App() {

  const [pokeSel, setPokeSel] = useState({
    id: 0,
    name: '',
    type: [
      ''
    ],
    base: {
      HP: '',
      Attack: '',
      Defense: '',
      SpAttack: '',
      SpDefense: '',
      Speed: ''
    }
  })

  return (
    <div className="App">
      <Header pokeSel={pokeSel}/>
      <SelectPj pokedex={pokedex} setPokeSel={setPokeSel}/>
    </div>
  );
}

export default App;
