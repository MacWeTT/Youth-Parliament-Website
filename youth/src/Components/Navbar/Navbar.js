import React, {useState} from 'react';
import logo from './logo-yp.png';
import './Navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
// import {Link} from 'react-router-dom';
// import {animateScroll as scroll} from 'react-scroll';
import {Link as LNK} from 'react-scroll';

function Navbar() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  // const [isOpen, setOpen] = useState(false)  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className='navbar'>
      <div className={header ? "header active" : "header"}>
        <div className={`header-wrapper ${click ? 'header-wrapper active':''} `}>
          <div className='nav-container'>
            <div className='yp-logo-header'>
                  <img src={logo} className='nav-logo' alt='YP'/>
            </div>
            
            <div className='header-links'>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <LNK 
                    to='about-yp' 
                    className='nav-links' 
                    activeClassName='active' 
                    onClick={handleClick}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}>
                      About
                  </LNK>
                </li>
                <li className='nav-item'>
                  <LNK 
                    to='agenda-yp' 
                    className='nav-links' 
                    activeClassName='active' 
                    onClick={handleClick}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}>
                      Agenda
                  </LNK>
                </li>
                <li className='nav-item'>
                  <LNK 
                    to='Council-Section' 
                    className='nav-links' 
                    activeClassName='active' 
                    onClick={handleClick}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                      Council
                  </LNK>
                </li>
                <li className='nav-item'>
                  <LNK 
                    to='schedule-yp' 
                    className='nav-links' 
                    activeClassName='active' 
                    onClick={handleClick}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                      Schedule
                  </LNK>
                </li>
                <li className='nav-item'>
                  <LNK 
                    to='container-teams' 
                    className='nav-links' 
                    activeClassName='active' 
                    onClick={handleClick}
                    spy={true}
                    smooth={true}
                    offset={80}
                    duration={1000}>
                      Gallery
                  </LNK>
                </li>
              </ul>
              
              <div className='nav-icon' onClick={handleClick}>
                {click ? <RiCloseLine/> : <RiMenu3Line/>} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar