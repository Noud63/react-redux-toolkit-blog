import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { loginUser, resetState } from '../features/loginSlice'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    const validInput = [password, email].every(Boolean)

    const handleSubmit = () => {

        if (validInput) {
            dispatch(loginUser({ email: email, password: password }))
        }
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if (isLoggedIn) {
            toast.success('Logged in Successfully!')
        } else if (isError) {
            toast.error(message);
        }
    }, [isError, isLoggedIn, message])


    return (
        <>
            <ToastContainer theme='dark' position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                toastStyle={{ backgroundColor: "rgb(0, 0, 0)", color: 'rgb(100, 149, 237)', fontSize: '1rem' }}
            />
            <div className="registerHeader">Login</div>
            <form >
                <label htmlFor="registerName">email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="registerE mail">password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="button" className="registerBtn" onClick={handleSubmit} disabled={!validInput}>submit</button>
            </form>
        </>
    )
}

export default Login
