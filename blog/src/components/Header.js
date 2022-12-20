import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
        <header className="Header">
            <span className="sayit">You Talkin' to me?</span>
            <nav>
                <ul>
                    <li><Link to="/" className="headerlink">Home</Link></li>
                    <li><Link to="post" className="headerlink">Post</Link></li>
                    <li><Link to="user" className="headerlink">Users</Link></li>
                </ul>
            </nav>
        </header>

            <div className="registerLogin">
                <Link to='/register' className="register">Register</Link>
                <Link to='/login' className="login">Login</Link>
            </div>
        
        </>
    )
}

export default Header
