import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'

export class Content extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {/* {savedPosts.map((post) => {
            return (
              <div key={post.title} className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="post"></img>
                <p>{post.description}</p>
              </div>
            )})
          } */}
          <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    )
  }
}

export default Content