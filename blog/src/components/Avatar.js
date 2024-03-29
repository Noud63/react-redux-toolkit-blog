import React from 'react'
import { useSelector } from 'react-redux';

const Avatar = ({ userId }) => {
  
  const users = useSelector(state => state.users.users)
  const author = users.find(user => user.id == userId)

  return (
    <div className="avatar"><img src={author && `images/${author.avatar}`} alt="user" style={{ width: '40px', height: 'auto' }} />{author && author.name}</div>
        )
}

export default Avatar
