import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Clase 17 y 18/Home";
import PokeList from "./Components/Clase 17 y 18/PokeList";
import PokeType from "./Components/Clase 17 y 18/PokeType";
import Pokemon from "./Components/Clase 17 y 18/Pokemon";
import NotFound from "./Components/Clase 17 y 18/NotFound";

function App() {

   return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/pokemon' element={<PokeList/>}>
                  <Route path=':pokeName' element={<Pokemon/>}/>
              </Route>
              {/* <Route path=':pokeName' element={<Pokemon/>}/> */}
              <Route path='/type' element={<PokeType/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
