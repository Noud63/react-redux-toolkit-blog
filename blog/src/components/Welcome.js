import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


const Welcome = () => {

    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    const navigate = useNavigate()

    const goRegister = () => {
        navigate('/register')
    }

    const goLogin = () => {
       navigate('/login')
    }

    const goLogout = () => {
       navigate('/')
    }

    
    return (

        <div className="registerLogin">
            <div className="welcome">Welcome: {loggedInUser.username}</div>
            <div>
                <button type="button" className="register" onClick={goRegister}>Register</button>
                <button type="button" className="login" onClick={goLogin} disabled={isLoggedIn}>Login</button>
                <button type="button" className="login" onClick={goLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Welcome
