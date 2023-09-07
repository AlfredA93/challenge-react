import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        setIsLoaded(true);
        setFetchedPosts(savedPosts);
    }, 2000);
}, []);

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((author) => {
      return author.name.toLowerCase().includes(name)
    });

    setFetchedPosts(filteredPosts);

  }

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
            onChange={(e) => { handleChange(e) }}
            />
            <h4>posts found: {fetchedPosts.length}</h4>
          </form>

        </div>
        <div className={css.SearchResults}>
          {
          isLoaded ? 
          <PostItem savedPosts={fetchedPosts} />
          :<Loader />
          }
        </div>
      </div>
  )
}

export default ContentHooks