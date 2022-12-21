import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, resetState } from '../features/registerSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [ fullname, setFullname ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ repeatPassword, setRepeatPassword ] = useState("")

    const dispatch = useDispatch()

    const user = useSelector( state => state.registereduser)
    const { registeredUser, isError, message, isRegistered} = user
    console.log(registeredUser)

    const validInput = [fullname, username, email, password].every(Boolean)

    const handleSubmit = () => {
      if (password !== repeatPassword){
        toast.error("Passwords don't match");
        setPassword("")
        setRepeatPassword("")
      }
      if (validInput && (password === repeatPassword)){
        dispatch(registerUser({ name: fullname, username: username, email: email, password: password }))
      }
      setFullname("")
      setUsername("")
      setEmail("")
      setPassword("")
      setRepeatPassword("")
    }

    useEffect(()=> {
     if(isRegistered){
       toast.success('Registered Successfully!')
      //  dispatch(resetState())
       return
     }else if(isError){
       toast.error(message);
     }
    }, [isError, isRegistered, message])


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
    <div className="registerHeader">Register</div>
    <form >
          <label htmlFor="registerName">Name:</label>
              <input 
                  type="text" 
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}/>

          <label htmlFor="registerUsername">Username:</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="registerEmail">Email:</label>
              <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password:</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="password">Repeat Password:</label>
              <input
                  type="password"
                  id="repeatpassword"
                  name="repeatpassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)} />

          <button type="button" className="registerBtn" onClick={handleSubmit} disabled={!validInput}>submit</button>
    </form>
    </>
  )
}

export default Register

