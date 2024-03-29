import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const UsersList = () => {

    const users = useSelector(state => state.users.users)

    const renderUsers = users.map(user => (
        <li key={user._id}>
            <Link to={`/user/${user.id}`} className="usersnames">{user.name}</Link>
        </li>
    ))
    return (
        <>
            <section>
                <ul>{renderUsers}</ul>
            </section>
        </>
        
    )
}

export default UsersList
