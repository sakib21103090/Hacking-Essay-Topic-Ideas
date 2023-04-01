import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Ans from './Components/Ans/Ans';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
        
          <Ans></Ans> 

       </div>
     </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
