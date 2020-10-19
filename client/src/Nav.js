import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Nav() {




    return (
        <div id='nav-wrap'>
            <NavLink className='textNav' to='/'>Home</NavLink>
            <NavLink className='textNav' to='/About'>About</NavLink>
            <NavLink className='textNav' to='/Code'>Code</NavLink>
            <NavLink className='textNav' to='/Music'>Music</NavLink>
            <NavLink className='textNav' to='/Contact'>Contact</NavLink> 
        </div>

    );
}

export default Nav;

/* <h2>Home</h2>
            
            <a href='/About'>  
            
            <h2> About </h2> </a>
            <a> <h2> Code </h2> </a>
            <a><h2> Music </h2> </a>
            <a href='/Contact'> <h2> Contact </h2> </a> */
