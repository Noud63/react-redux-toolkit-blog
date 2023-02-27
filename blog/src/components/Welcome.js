import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../features/loginSlice'


const Welcome = () => {

    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goRegister = () => {
        navigate('/register')
    }

    const goLogin = () => {
       navigate('/login')
    }

    const goLogout = () => {
       dispatch(resetState())
       navigate('/')
    }

    
    return (

        <div className="registerLogin">
            <div className="welcome">Welcome: {isLoggedIn ? loggedInUser.username : ""}</div>
            <div className="loginRegister">
                <button type="button" className="register" onClick={goRegister}>Register</button>
                <button type="button" className="login" onClick={goLogin} disabled={isLoggedIn}>Login</button>
                <button type="button" className="logout" onClick={goLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Welcome
