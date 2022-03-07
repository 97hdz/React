import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyle.css'

const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)


    // the blackbackground on nav when scrolling down
    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>GLX TRVL</h1></Link>
            {/* activating the responsive menu on click */}
            <ul className={click ? 'nav_menu active' : 'nav_menu'}> 
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/training'>Training</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburguer' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color:'#fff'}} />)}
            </div>
        </div>
    )
}

export default Navbar