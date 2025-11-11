import React from 'react'
import "../App.css"
import AllReceipes from '../components/AllReceipes'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <section className='home'>
            <div className='left'>
                <h1>
                    Share your favorite receipe with the world
                </h1>
                <p>
                    Join our coumminity of food lovers and share your favorite receipe.
                </p>
                <button onClick={()=> navigate('/addReceipe')}>Share your receipe</button>
            </div>
            <div className='right'>
            </div>
        </section>
        <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,197.3C672,192,768,160,864,149.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
            <AllReceipes/>
    </div>


  )
}

export default Home