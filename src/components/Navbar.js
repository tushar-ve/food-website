import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';



const Navbar = () => {
  


  const[openLinks, setOpenLinks]= useState(false)
  const toogleNavbar = ()=>{
 setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
    <div className='leftSide' id={openLinks ? "open" :"close"}>
      <img src={Logo} alt='/'/>
      <div className='hiddenLinks'>
      <Link to='/' >Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/login'>Login</Link>

      </div>
    </div>
    <div className='rightSide'>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Button  href='/login' style={{backgroundColor: '#352121'}} variant="outlined" color="error">
  Login
</Button>
      <button onClick={toogleNavbar}>
        <ReorderIcon />
      </button>
    </div>

    </div>
  )
}

export default Navbar