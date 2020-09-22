import React from 'react'
import { Link } from 'react-router-dom'
import hrWork from '../../assets/hrwork_logo.svg'

const Nav = () => {
    return (
        <nav className="main-nav">

            <input type="checkbox" className="toggle" />
            <div className="hamburger-wrap">
                <div className="hamburger"></div>
            </div>
            
            <div className="logo-box">
                <img src={hrWork} alt="HR WORK"/>
            </div>
            <ul className="nav-list">
                <li><Link to='/'>Who we are</Link></li>
                <li><Link to='/'>Packages</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Careers</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>

        </nav>
    )
}

export default Nav
