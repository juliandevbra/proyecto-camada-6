import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/Clase 16/About";
import Contact from "./Components/Clase 16/Contact";
import Home from "./Components/Clase 16/Home";

function App() {
   return (
    <div>
      {/* Ejemplo con navbar */}
      <Link to='/'> Home</Link>
      <Link to='/about'> About</Link>
      <Link to='/contacto'> Contacto</Link>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacto' element={<Contact/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
