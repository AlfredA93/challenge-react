import React, { Component } from 'react'
import css from "./css/Content.module.css"
import axios from 'axios';
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import API_KEY from '../secrets.js'

export class ContentAPI extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    }
  };

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
    const fetchedPosts = response.data.hits;

    this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
    })
  }

  handleChange = (e) => {
  const name = e.target.value.toLowerCase();
  const filterPosts = this.state.savedPosts.filter((post) => {
    return post.user.toLowerCase().includes(name)
  });
  this.setState({
    posts: filterPosts
  })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            {/* Search Form here */}
            <label htmlFor="searchInput">Search:</label>
            <input 
            type="search" 
            placeholder="Author"
            id="searchInput"
            onChange={(e) => this.handleChange(e)}
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItemAPI savedPosts={this.state.posts} />
          ):(<Loader />)}
        </div>
      </div>
    )
  }
}

export default ContentAPI