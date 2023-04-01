import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {id,Author,Title,date,img,profile,time}=props.Hack;
    const handleShowCard=props.handleShowCard;
    const handleShowTime=props.handleShowTime;
       
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
                           <p>0{time}min read <FontAwesomeIcon onClick={()=>handleShowCard(props.Hack)} icon={faBookmark} /> </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text'>{Title}</h2>
                    </div>
                    <div className="click">
                    <p onClick={()=>handleShowTime(props.Hack)} >Mark as read</p>
                    
                    </div>
                    <h3></h3>
                    </div>
                    </div>
        </div>
    );
};

export default Card;