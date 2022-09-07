import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Clase 17/Home";
import PokeList from "./Components/Clase 17/PokeList";
import PokeType from "./Components/Clase 17/PokeType";
import Pokemon from "./Components/Clase 17/Pokemon";
import NotFound from "./Components/Clase 17/NotFound";

function App() {

  const [pokeSel, setPokeSel] = useState({})

   return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/pokemon' element={<PokeList/>}>
                  <Route path=':pokeName' element={<Pokemon/>}/>
              </Route>
              <Route path='/type' element={<PokeType/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
