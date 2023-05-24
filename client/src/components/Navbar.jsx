import React from 'react'
import { Link } from 'react-router-dom'
import '../components/_Navbar.scss'
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  return (

    <div className="navbar">
<div className="container">
<div className="navTop">
        <div className="left">
          <p>We believe we helps people <br />
            for happier lives</p>
        </div>
        <div className="center">
          <Link to=''><img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" /></Link>
        </div>
        <div className="right">
          <span>+999 838 22 222 222</span>
          <p><IoCallOutline className='icon'/></p>

        </div>
      </div>
      
      <div className="navBottom">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/add">ADD</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/">IMMIGRATION</Link></li>
          <li><Link to="/add">COURSE</Link></li>
          <li><Link to="/about">COUNTRY</Link></li>
          <li><Link to="/">CONTACT</Link></li>
          <li><Link to="/add">ELEMENTS</Link></li>
        </ul>
      </div>
</div>
    </div>
  )
}

export default Navbar
