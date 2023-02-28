import React, {useState} from 'react'
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
        <header className="header">
            <span className="wegottatalk">We Gotta Talk.....</span>
                
            <nav className="menu">
                <div><Link to="/" className="headerlink">HOME</Link></div>
                <div><Link to={isLoggedIn ? "post" : "/"} className="headerlink" onClick={handleAddPost}>POST</Link></div>
                <div><Link to="user" className="headerlink">USERS</Link></div>
                
            </nav>

                <Welcome />
        </header>
            
        </>
    )
}

export default Header
