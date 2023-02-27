import React from 'react'
import { useSelector } from 'react-redux';

const Avatar = ({userId}) => {
     
    const users = useSelector(state => state.users.users)
    const author = users.find(user => user.id === userId)
    

  return (
    
          <div className="avatar"><img src={author.avatar} alt="user" style={{ width: '50px', height: 'auto' }} />{author.name}</div>
    
  )
}

export default Avatar
