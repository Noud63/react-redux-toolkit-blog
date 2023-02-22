import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import React from 'react'

const PostAuthor = ({isLoggedIn, loggedInUser, post, userId}) => {

  const [overlay, setOverlay] = React.useState(false)

const navigate = useNavigate()

  const users = useSelector(state => state.users.users)
  const author = users.find(user => user.id === userId)

  const handleEditPost = () => {
    if (isLoggedIn && author.name === loggedInUser.name) {
      navigate(`/post/edit/${post._id}`)
    }else{
      if (!isLoggedIn || author.name !== loggedInUser.name) {
        setOverlay(true)
      }
    }
  }

  const removeOverlay = () => {
    setOverlay(false)
  }

return (
    <>
      {overlay && <div className="overlay" onClick={removeOverlay}>
        <div className="overlayText">You are not authorized to edit this post!</div>
      </div>}
      <span className="postCredit" onClick={handleEditPost}><u>Edit Post </u></span>
      <span>by {author ? author.name : 'Unknown author'}</span>
    </>
    
  )
}

export default PostAuthor
