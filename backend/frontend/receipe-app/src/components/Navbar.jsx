import React from 'react'
 import logo from '../assets/logo.png'
import { useState } from 'react'
import Modal from './Modal';
import InputForm from './InputForm';
import { useEffect } from 'react';

function Navbar() {

  const [isOpen, setisOpen] = useState(false);
  let token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token? true: false);
  useEffect(()=>{
    setIsLogin(token? true : false);
  }, [token]);
  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
      return;
      
    }else{setisOpen(true); }
  }

    const closeModal = () => {
    setisOpen(false);
  }

  return (
    <>
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li onClick={()=> isLogin && setisOpen(true)}>
                  <a href= {isLogin? '/myReceipes': '/'}>Receipe</a></li>
                <li onClick={()=> isLogin && setisOpen(true)}>
                  <a href={isLogin? '/myFavReceipes': '/'}>Favorites </a></li>
                <li><a href=''>Contact</a></li>
                <button onClick={checkLogin}>{(isLogin) ? "Logout" : "Login"}</button>
            </ul>

        </nav>
    </header>
     {(isOpen)&& <Modal onClose={closeModal}><InputForm/> </Modal>}
    </>
  )
}

export default Navbar