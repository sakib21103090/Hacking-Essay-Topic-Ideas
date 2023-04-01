import React from 'react';
import './Ans.css'

const Ans = () => {
    return (
        <div className='card m-5 '>
             <div className=' Ans-style card'>
                <h5> Q-1 : difference between state and props?</h5>
                <h5> Ans 1: 
                    State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h5>
             </div>
             <div className=' Ans-style card'>
                <h5> Q-2 : work  of useState ?</h5>
                <h5> Ans 2: 
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value  and another function to update this value.</h5>
             </div>
             <div className='Ans-style card'>
                <h5> Q-3 : without data load some work of useEffect?</h5>
                <h5> Ans 3: 
                Without loading any data, some work that can be done inside a useEffect
                <p>1 : Updating the document title</p>
                <p>2 :Subscribing to events</p>
                <p>3:Setting up a timer</p>
                </h5>
             </div>
             <div className='Ans-style card'>
                <h5> Q-4 : how does react work?</h5>
                <h5> Ans 4: 
                React contains a collection of reusable JavaScript code snippets used for user interface UI building called components. It's important to note that ReactJS is not a JavaScript framework.</h5>
             </div>
             
        </div>
    );
};

export default Ans;