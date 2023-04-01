import React from 'react';
import './SpendTime.css'
const SpentTime = ({cart2}) => {
    console.log(cart2)
    return (
        <div>
        <div>
              
            
             {
                cart2.map(b=>
                    <p className='time-style card'>Spent time on read :0{b.time}min</p>
                    )
             }

        </div>
        </div>
    );
};

export default SpentTime;