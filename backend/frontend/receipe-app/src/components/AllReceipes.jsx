import React from 'react'
import { BsHeartHalf } from "react-icons/bs";

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

function AllReceipes() {
    const[receipes, setReceipes] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:5000/receipe")
        .then(response=>{
            setReceipes(response.data);
        })    
    }, []);
  return (
    <div className='receipes-container'>
        <h2>All receipes</h2>
        <div className='cards-wrapper'>
            {receipes?.map((receipe, index)=>(
            <div className='receipe-card' key={index}>
                <h4>{receipe?.title}</h4>
                <p>{receipe?.ingredients}</p>
                <small>{receipe?.instructions}</small>

                <div className='icons'>
                    <BsHeartHalf/>

                </div>
            </div>
            ) 
            )} 
        </div>
    </div>

  )
}

export default AllReceipes