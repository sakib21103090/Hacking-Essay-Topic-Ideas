import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Sidecart from './Components/Sidecart/Sidecart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
     <Header></Header>
     </div>
     <div>
       <div>
        <Cards></Cards>
       </div>
       
       <div>
        
        
           

       </div>
     </div>
      
    </div>
  )
}

export default App
