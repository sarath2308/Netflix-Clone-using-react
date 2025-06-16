import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
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
                <p>SignOut</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar