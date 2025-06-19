import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import firebase from '../../firebase'

const Navbar = () => {
  const navRef=useRef()

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 🔁 Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className='navbar'>
{/*navbar left*/}
        <div className='navbar-left'>
      <img src={logo}></img>
      <ul>
<li>Home</li>
<li>Tv shows</li>
<li>Movies</li>
<li>New & Popular</li>
<li>My List</li>
<li>Browse By Language</li>
      </ul>
        </div>
{/*navbar right*/}
        <div className='navbar-right'>
     <img src={search_icon} alt='' className='icons' />
     <p>Children</p>
       <img src={bell} alt='' className='icons' />
        <div className="navbar-profile">
           <img src={profile} alt='' className='Profile' />
            <img src={caret_icon} alt='' />
            <div className="drop-down">
                <p onClick={()=>firebase.logOut()}>SignOut</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar