import React from 'react';
import './Sidecart.css'

const Sidecart = ({cart}) => {
    // console.log(props.a)
    
    
    return (
        <div>
        <div>
            <h5 className='blogs card '>Bookmarked Blogs : {cart.length}</h5>
            
             {
                cart.map(a=>
                    <p className='Bookmark-page card'>{a.Title}</p>
                    )
             }

        </div>
        </div>
    );
};

export default Sidecart;