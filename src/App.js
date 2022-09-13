import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Clase 17 y 18/Home";
import PokeList from "./Components/Clase 17 y 18/PokeList";
import PokeType from "./Components/Clase 17 y 18/PokeType";
import Pokemon from "./Components/Clase 17 y 18/Pokemon";
import NotFound from "./Components/Clase 17 y 18/NotFound";

function App() {

  const [loading, setLoading] = useState(true)

   return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/pokemon' element={<PokeList loading={loading} setLoading={setLoading}/>}>
                  <Route path=':pokeName' element={<Pokemon  loading={loading} setLoading={setLoading}/>}/>
              </Route>
              <Route path='/type' element={<PokeType/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
