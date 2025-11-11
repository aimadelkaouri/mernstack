import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function InputForm() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");
    const [succes, setSucces] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        let endPoint = (isSignUp) ? "register":"signin"

        await axios.post(`http://localhost:5000/user/${endPoint}`,  { email,password})
        .then((response) =>  {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.user))
            setSucces(response.data.message)
        })
        .catch((err) =>{
            setError(err.response.data.message)
        })
    }

  return (
    <>
        <form className='input-form' onSubmit={handleSubmit}>
            <input onChange={(e)=> setEmail(e.target.value)} name='email' className='form-control mt-3' type="text"  placeholder='email'/>
            <input onChange={(e)=> setPassword(e.target.value)} name='password'  className='form-control mt-3' type="password"  placeholder="password" />
            <button  className='button mt-3 w-100' type="submit">{(isSignUp? "Sign up": "Log in")}</button>
            <h5 className='succes'>{(succes!="") && succes}</h5>
            <h5 className='error'>{(error!="") && error}</h5>
            <p onClick={() => setIsSignUp(!isSignUp)} >{(isSignUp)? "alredy have an account ?" : "Create an account" }  </p>
        </form>
    </>
  )
}

export default InputForm