import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewPost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

import { useNavigate } from 'react-router-dom'

const AddPostForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = () => {
    if(canSave){
      try {
        setAddRequestStatus('Pending')
        dispatch(addNewPost({ title, body: content, userId })).unwrap()

        setTitle('')
        setContent('')
        setUserId('')
        navigate('/')
      } catch (error) {
        console.log('Failed to save the post', error)
      } finally {
        setAddRequestStatus('idle')
      }
     
    }
  }

  const userOptions = users.map(user => {
    return <option key={user.id} value={user.id}>
      {user.name}
    </option>
  })

  return (
    <section>
      <div className="addnewpost">Add a New Post</div>
      <form >

        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Users:</label>
        <select value={userId} id="postAuthor" onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Message:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        
        <button type="button" onClick={onSavePostClicked} disabled={!canSave} className="savepostbutton">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
