import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul className='menu'>
                <li> <Link to='/home' style={{color:'white'}}>Home</Link></li>
                <li><Link to='/category' style={{color:'white'}}>Category</Link></li>
                <li> <Link to='/products' style={{color:'white'}}>Products</Link></li>
                <li><Link to='/adminArea' style={{color:'white'}}>Admin Area</Link></li>
            </ul>
        </div>
    )
}

export default Nav
