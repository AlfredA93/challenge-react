import React from 'react'
import css from "./css/Content.module.css"

function PostItem(props) {
  return (
    props.savedPosts.map(post => {
      const {id, type, user, webformatURL, tags} = post
      return <div className={css.SearchItem} key={id}>
              <p>{type}</p>
              <p>{user}</p>
              <img src={webformatURL} alt="post"></img>
              <p>{tags}</p>
              </div>
    })
  )
    
}

export default PostItem