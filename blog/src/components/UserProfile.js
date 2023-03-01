import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {

    const user = useSelector(state => state.loggedinuser.loggedInUser)
    const { email, name, username} = user

    const users = useSelector(state => state.users.users)
    const author = users.find(user => user.name === name)

  return (
    <div className="userProfileBox">
          <div className="profileAvatar"><img src={author && `images/${author.avatar}`} alt="user" style={{ width: '60px', height: 'auto' }} /></div>
      <div className="userProfile">User Profile</div>
          <div className="name profile">Name : <span>{name}</span></div>
          <div className="email profile">Email : <span>{email}</span></div>
          <div className="username profile">Username : <span>{username}</span></div>
    </div>
  )
}

export default UserProfile
