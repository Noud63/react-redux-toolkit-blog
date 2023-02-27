import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice'
import PostExcerpt from './PostsExcerpt'

const PostsList = () => {

    // Posts are fetched immediately at app load -> index.js

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcerpt key={post._id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList
