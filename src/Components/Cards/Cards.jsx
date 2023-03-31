import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [Hacking,setHacking]=useState([]);
   
    useEffect(()=>{
        fetch('/public/Hacking.json')
        .then(res=>res.json())
         .then(data=>setHacking(data))
    },[]);
    return (
        <div>
                    {
                        Hacking.map(Hack=>
                             <Card
                            Hack={Hack}
                            key={Hack.id}  
                            ></Card> )
                    }

            </div>
        
    );
};

export default Cards;