import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersSlice'
import { selectPostByUser } from '../posts/postsSlice'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {

    const { id } = useParams()

    const user = useSelector( state => state.users.users.find(user => user.id === id))

    const postsForUser = useSelector( state => selectPostByUser(state, id))

    const postTitles = postsForUser.map(post => (
        <li key={post._id} className="postTitle">
            &nbsp;<Link to={`/post/${post._id}`} className="link">{post.title}</Link>
        </li>
    ))


    return (
        <section>
            <h3 className="user"><span className="user">User : {user?.name}</span></h3>
            <div style={{marginLeft: '20px'}}><ol>{postTitles}</ol></div>
        </section>
    )
}

export default UserPage
