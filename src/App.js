import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Clase 17, 18 y 19/Home";
import PokeList from "./Components/Clase 23/PokeList";
import PokeType from "./Components/Clase 17, 18 y 19/PokeType";
import Pokemon from "./Components/Clase 17, 18 y 19/Pokemon";
import NotFound from "./Components/Clase 17, 18 y 19/NotFound";
import UseCallback from "./Components/Clase 24/UseCallback";
import UseMemo from "./Components/Clase 24/UseMemo";
import { ToggleButton } from "./Components/Clase 24/ToggleButton";
// import Home from "./Components/Clase 22/Home";

function App() {

  const [loading, setLoading] = useState(true)

  const [product, setProduct] = useState({
    stock: 1
  })

  return (
    <div>
      <Home loading={loading} stock={product.stock}/>
      {/* <UseCallback/> */}
      
      {/* <UseMemo/> */}

      {/* <ToggleButton/>
      <ToggleButton/> */}

      {/* <Routes>
          <Route path='/' element={<Home loading={loading} setLoading={setLoading}/>}>
              <Route path='/pokemon' element={<PokeList loading={loading} setLoading={setLoading}/>}>
                  <Route path=':pokeName' element={<Pokemon  loading={loading} setLoading={setLoading}/>}/>
              </Route>
              <Route path='/type' element={<PokeType/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
