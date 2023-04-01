import React from 'react';
import './SpendTime.css'
const SpentTime = ({cart2}) => {
    
    let TotalTime=0;
    for(const Hack of cart2)
    TotalTime=TotalTime+parseInt(Hack.time);
    return (
        <div>
        <div>
             <h4 className='style-time card'>Spent Time On Read : {TotalTime}min</h4>
        </div>
        </div>
    );
};

export default SpentTime;