import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/footer_logo.svg'
import {AiOutlineCopyright} from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer" style={{ background: '#EF0633' }}>
            <div className="footer-wrap">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="HR Work"/>
                    </div>
                    <div className="quick-links">
                        <Link to='/'>About</Link>|
                        <Link to='/'>Our Packages</Link>|
                        <Link to='/'>Blog</Link>|
                        <Link to='/'>Careers</Link>|
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className="contact-details">
                        <h3 className="mb-1">CONTACT US</h3>
                        <p>
                            11 Deji Olamiju Street,
                            Soluyi-Gbagada, Lagos
                        </p>
                        <p> Call: 07034417961</p>
                        <p>
                            Email: <a href="mailto:info@alphaduxconsulting.com">info@alphaduxconsulting.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copy-right" style={{ display: 'flex', alignItems: 'center' }}>
                            <AiOutlineCopyright />
                            <span>{(new Date().getFullYear())}</span>
                            <span>HR Work All right reserved</span>
                    </div>
                    <div className="terms">
                        <p> <Link to='/'>Terms & Conditions</Link> | <Link to='/'>Privacy Policy</Link></p>
                    </div>
                    <div className ="footer-icons" >
                        <a href="/"><FaFacebookF /></a>
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
