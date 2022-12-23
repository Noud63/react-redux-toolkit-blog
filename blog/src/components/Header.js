import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'
import { useSelector } from 'react-redux'

const Header = () => {

    const [overlay, setOverlay] = useState(false)

    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    const handleAddPost = () => {
        if (!isLoggedIn){
            setOverlay(true)
        }
    }

    const removeOverlay = () => {
            setOverlay(false)
    }

    return (
        <>
        {overlay && <div className="overlay" onClick={removeOverlay}>
            <div className="overlayText">You have to register and log in first!</div>
        </div>}
        <header className="Header">
            <span className="sayit">You Talkin' to me?</span>
            <nav>
                <ul>
                    <li><Link to="/" className="headerlink">Home</Link></li>
                    <li><Link to={isLoggedIn ? "post" : "/"} className="headerlink" onClick={handleAddPost}>Post</Link></li>
                    <li><Link to="user" className="headerlink">Users</Link></li>
                </ul>
            </nav>
        </header>
            <Welcome />
        </>
    )
}

export default Header
