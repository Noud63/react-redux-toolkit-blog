import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { Link } from 'react-router-dom'

let PostsExcerpt = ({ post }) => {
  return (
      <article>
          <h3>{post.title}</h3>
          <p className="excerpt">{post.body.substring(0, 75)}...</p>
          <p className="postCredit">
              <Link to={`post/${post._id}`}>View Post</Link>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
      </article>
  )
}

//If the post does not change it will not rerender -> run profiler
//Set 'const' PostsExcerpt to 'let'
PostsExcerpt = React.memo(PostsExcerpt)

export default PostsExcerpt
