import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Clase 17, 18 y 19/Home";
import PokeList from "./Components/Clase 17, 18 y 19/PokeList";
import PokeType from "./Components/Clase 17, 18 y 19/PokeType";
import Pokemon from "./Components/Clase 17, 18 y 19/Pokemon";
import NotFound from "./Components/Clase 17, 18 y 19/NotFound";

function App() {

  const [loading, setLoading] = useState(true)

   return (
    <div>
      <Routes>
          <Route path='/' element={<Home loading={loading} setLoading={setLoading}/>}>
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
