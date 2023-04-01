import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SpentTime from '../SpentTime/SpentTime';
import Sidecart from '../Sidecart/Sidecart';

const Cards = () => {
    const [Hacking,setHacking]=useState([]);
    const [cart,setCart]=useState([]);
    const [cart2,setCart2]=useState([0]);
   
    useEffect(()=>{
        fetch('/public/Hacking.json')
        .then(res=>res.json())
         .then(data=>setHacking(data))
    },[]);

    const handleShowCard=(Hack) =>{
       
        const newCart=[...cart,Hack]
        setCart(newCart);
    }
    

    const handleShowTime=(Hack) =>{
       
        const newCart=[...cart2,Hack]
        setCart2(newCart);
        
    
}
    return (
        <div>
       <div className='main row gap-5 d-flex m-auto mt-2 '>
       <div className='cart-container col-md-7 card '>
                    {
                        Hacking.map(Hack=>
                             <Card
                            Hack={Hack}
                            key={Hack.id}  
                            handleShowCard={handleShowCard}
                            handleShowTime={handleShowTime}

                            ></Card> )
                    }
     </div>
      
            <div  className='sideCard-container col-md-4 card'>
             <div className='card mb-5'>
             {
                
            <SpentTime 
            cart2={cart2}
            ></SpentTime>
            }
           </div >
          <div className='card'>

            {

                       <Sidecart
                        cart={cart}
                        ></Sidecart>
            }
          
          </div>
       </div>
       </div>
       </div>
            
            
           

        
    );
};

export default Cards;