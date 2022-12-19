import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersSlice'
import { selectPostByUser } from '../posts/postsSlice'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {

    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, userId))

    const postsForUser = useSelector( state => selectPostByUser(state, userId))

    const postTitles = postsForUser.map(post => (
        <li key={post._id} className="postTitle">
            &nbsp;<Link to={`/post/${post._id}`} className="link">{post.title}</Link>
        </li>
    ))


    return (
        <section>
            <h3><span className="user">User :</span> {user?.name}</h3>
            <div style={{marginLeft: '25px'}}><ol>{postTitles}</ol></div>
        </section>
    )
}

export default UserPage
