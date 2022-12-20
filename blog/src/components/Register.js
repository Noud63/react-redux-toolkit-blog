import React, {useState} from 'react'

const Register = () => {

    const [ name, setName ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")

    const validInput = [name, username, email].every(Boolean)

    const handleSubmit = () => {
      if(validInput){
          console.log({ name, username, email })
      }
        
      setName("")
      setUsername("")
      setEmail("")
    }


  return (
    <>
    <div className="registerHeader">Register</div>
    <form >
          <label htmlFor="registerName">Name:</label>
          <input 
              type="text" 
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}/>

          <label htmlFor="registerUsername">Username:</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="registerE mail">Email:</label>
              <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

          <button type="button" className="registerBtn" onClick={handleSubmit} disabled={!validInput}>submit</button>
    </form>
    </>
  )
}

export default Register

