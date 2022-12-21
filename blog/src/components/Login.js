import React, { useState } from 'react'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const validInput = [name, email].every(Boolean)

    const handleSubmit = () => {
        if (validInput) {
            console.log({ name, email })
        }

        setName("")
        setEmail("")
    }


    return (
        <>
            <div className="registerHeader">Login</div>
            <form >
                <label htmlFor="registerName">email:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor="registerE mail">password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="button" className="registerBtn" onClick={handleSubmit} disabled={!validInput}>submit</button>
            </form>
        </>
    )
}

export default Login
