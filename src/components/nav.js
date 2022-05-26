import * as React from 'react';
import '../pages/css/nav.css';
import phone from '../../static/assetts/phone-call.png';
import close from '../../static/assetts/close.png';
import { Link } from 'gatsby';
import { useState } from 'react';
import logo from '../../static/assetts/logo-outline-white.png';

function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <div className='svg-cont' style={menuOpen ? {opacity: '0', display: 'none'} : {opacity: '1', display: 'block'}} onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
        </div>

        <nav className='Nav' style={menuOpen ? {left: '0'} : {left: '-270px'}}>

            <button className='closeBtn' style={menuOpen ? {display: 'block', opacity: '1'} : {display: 'none', opacity: '0'}} onClick={() => {
                menuOpen ? setMenuOpen(false) : setMenuOpen(true);
            }}>
                <img src={close} alt='close menu' />
            </button>

            <div className='nav-section'>
                <a className='nav-num' href='tel:16615055297'><img className='inline-img' src={phone} alt='phone'/>(661)-505-5297</a>
                <a className='nav-mail' href='mailto:jcremoval.contact@gmail.com'>jcremoval.contact@gmail.com</a>
            </div>

            <div className='nav-section'>
                <img className='logo' src={logo} alt='Navigation Logo'/>
            </div>

            <div className='nav-section'>
                <Link activeClassName='active' to='/'>Home</Link>
                <Link activeClassName='active' to='/our-services'>Services</Link>
                <Link activeClassName='active' to='/contact'>Contact</Link>
                <Link activeClassName='active' to='/gallery'>Gallery</Link>
            </div>

        </nav>
        <div className='nav-pos-fix'>

        </div>
        </>
    );
}
export default Nav;