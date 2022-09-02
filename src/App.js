import './App.css';
import { useState } from 'react';
import AsyncAwait from './Components/Clase 15/AsyncAwait';
import UseEffect from './Components/Clase 14/UseEffect';



function App() {

  const [show, setShow] = useState(false)

   return (
    <div className="App">
      <UseEffect/>
      <AsyncAwait/>
    </div>
  );
}

export default App;
