import React, { useEffect, useState } from 'react'
import FeedItem from '../../components/feed-item/feed-item'
import { getPosts } from '../../api'
import styles from './global-feed.module.css'

const GlobalFeed = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getPosts()
      .then(setPosts)
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }, [])

  const renderPosts = (posts) => {
    return posts.map((item) => {
      return <FeedItem key={item.id} title={item.title} text={item.body} />
    })
  }

  return <ul className={styles.feed}>{!isLoading && renderPosts(posts)}</ul>
}

export default GlobalFeed
