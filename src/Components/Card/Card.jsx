import React from 'react';
import './Cart.css'

const Card = (props) => {
    const {id,Author,Title,date,img,profile,time}=props.Hack;
    return (
        <div>
             <div className='card-Container '>
                       <div className='card-style card mb-3'>
                    <div>
                       <img  className='w-100 rounded ' src={img} alt=""/> 
                    </div>
                    <div className='profile'>
                        <div className='d-flex'>
                        <div>
                        <img className='imgp rounded-circle' src={profile} alt="" />
                        </div>
                        <div className='mt-2'>
                        <h2> <small>{Author}</small></h2>
                        <p className='text'> {date}</p>
                        </div>
                        </div>
                        <div className=''>
                           <p>0{time}min read</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text'>{Title}</h2>
                    </div>
                    <div className="click">
                    <a href="/Mark as read">Mark as read</a>
                    
                    </div>
                    <h3></h3>
                    </div>
                    </div>
        </div>
    );
};

export default Card;