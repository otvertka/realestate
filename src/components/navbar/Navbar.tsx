import React, { useState } from 'react';
import "./navbar.scss";


const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <nav>
            <div className='left'>
                <a href='/' className='logo'>
                    <img src='/public/images/navbar/logo1.png' alt='logoImage' />
                    <span>CityRealty</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className='right'>
                <a href='/'>Sign in</a>
                <a href='/' className='register'>Sign up</a>

                <div className='menuIcon'>
                    <img src='/public/menu.png' alt='burgerImage' onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign in</a>
                    <a href='/'>Sign up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
