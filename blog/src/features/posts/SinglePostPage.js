import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
    //Retrieve postId
    const { id } = useParams()

    const post = useSelector(state => selectPostById(state, id))

    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    if(!post) {
        return (
            <section>
                <h2>Post not Found!</h2>
            </section>
        )
    }

return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className="postCredit">
            <PostAuthor userId={post.userId} isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} post={post}/>
            <TimeAgo timestamp={post.date}/>
        </p>
            <ReactionButtons post={post}/>
    </article>
  )
}

export default SinglePostPage

    // < Link to = {`/post/edit/${post._id}`}> Edit Post</ >
