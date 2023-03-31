import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Sidecart from './Components/Sidecart.jsx/Sidecart';
import SpentTime from './Components/SpentTime/SpentTime';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
     <Header></Header>
     </div>
     <div className='main row gap-5 d-flex m-auto mt-2 '>
       <div className='cart-container col-md-7 card '>
        <Cards></Cards>
       </div>
       <div  className='sideCard-container col-md-4 card'>
        <div className='card mb-5'>
       <SpentTime></SpentTime>
        </div >
        <div className='card'>
        <Sidecart></Sidecart>
        </div>
           

       </div>
     </div>
      
    </div>
  )
}

export default App
