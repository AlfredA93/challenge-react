import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: '',

    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filterNames = savedPosts.filter((author) => {
      return author.name.toLowerCase().includes(name)
    });
    this.setState({
      posts: filterNames
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input 
            type="search" 
            placeholder="Author"
            id="searchInput"
            onChange={(event) => this.handleChange(event)}
            />
            <h4>posts found: {this.state.posts.length}</h4>

          </form>
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
          {this.state.isLoaded ? (
            <PostItem savedPosts={this.state.posts} />
          ):(<Loader />)}
        </div>
      </div>
    )
  }
}

export default Content