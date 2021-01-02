import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div>
            <h3>you must logIn to view this page</h3>
            <Link to="/adminArea/logged">
            <button className='login'>Log In</button>
            </Link>
        </div>
    )
}

export default Admin
