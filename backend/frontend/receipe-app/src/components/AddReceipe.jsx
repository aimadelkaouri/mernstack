import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddReceipe() {

    const [ receipe, setReceipe] = useState({});
    const navigate = useNavigate();

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients" ? e.target.value.split(",") :
            e.target.value)
            setReceipe(prev=>({...prev, [e.target.name]: val}))
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const FormData = new FormData();
            FormData.append('title', receipe.title)
            FormData.append('ingredients', receipe.ingredients)
            FormData.append('instructions', receipe.instructions)
            console.log(receipe)

        await axios.post("http://localhost:5000/receipe", FormData)
        .then(()=>navigate("/"))

        } catch (error) {
            console.error("error adding receipe")
        }
    }
  return (
    <div>
            <form onSubmit={onHandleSubmit} className='input-form w-50 m-auto'>
            <input onChange={onHandleChange}  name='title' className='form-control mt-3' type="text"  placeholder='title'/>
            <input onChange={onHandleChange} name='ingredients'  className='form-control mt-3' type="text"  placeholder="ingredients" />
            <input onChange={onHandleChange} name='instructions'  className='form-control mt-3' type="text"  placeholder="insctructions" />
            <label className='mt-3'>Add Image</label>
            <input onChange={onHandleChange} type="file" className='form-control mt-3' placeholder='image url ' name='coverImage'></input>
            <button  className='button mt-3 w-100' type="submit">add receipe</button>
          
        </form>
    </div>
  )
}

export default AddReceipe



