import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useParams } from 'react-router-dom'
import { SlArrowLeftCircle } from "react-icons/sl";

const SinglePostPage = () => {
    //Retrieve postId
    const { id } = useParams()

    const [ author, setAuthor ] = useState({})

    const post = useSelector(state => selectPostById(state, id))
  
    const userlogin = useSelector(state => state.loggedinuser)
    const { loggedInUser, isError, message, isLoggedIn } = userlogin

    const users = useSelector(state => state.users.users)

    useEffect(() => {
        if (post) {
            const user = users.find(user => user.id == post.userId)
            setAuthor(user)
        }
    },[post, users])
    
    
    if(!post) {
        return (
            <section>
                <h2>Post not Found!</h2>
            </section>
        )
    }

    const goBack = () => {
        window.history.back()
    }

return (
    <article className="singlePost">
        <h2>{post.title}</h2>
        <p className="excerpt">{post.body}</p>
        <div className="postCreditSingle">
            <PostAuthor userId={post.userId} isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} post={post}/>
            <TimeAgo timestamp={post.date}/>
        </div>
        <div className="goback">
            <button className="goBackBtn" onClick={goBack}>
                <SlArrowLeftCircle fontSize="30px" color="rgb(4, 20, 37)"/>
                </button>

                <div className="singlePostName">post by {author && author.name}</div>
        </div>
          
    </article>
  )
}

export default SinglePostPage


