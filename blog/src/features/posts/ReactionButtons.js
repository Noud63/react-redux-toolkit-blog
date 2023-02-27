import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'
import { SlLike, SlShareAlt, SlBubble } from "react-icons/sl";

const reactionEmoji = {
  like: <SlLike />,
  comment: <SlBubble />,
  share: <SlShareAlt />,
}

const ReactionButtons = ( {post} ) => {

  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {   // returns an array of arrays [['thumbsUp', '👍'], [], [], ......]
    return <button key={name} type="button" className="reactionButton" onClick={ () => dispatch(reactionAdded({id: post._id, reaction: name}))}>
      {emoji} &nbsp;{post.reactions[name]} &nbsp;&nbsp;
           </button>
  })

  return <div>{reactionButtons}</div>

}

export default ReactionButtons
