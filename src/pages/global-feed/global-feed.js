import React from 'react'
import FeedItem from '../../components/feed-item/feed-item'
import styles from './global-feed.module.css'

const GlobalFeed = () => {
  return (
    <div className={styles.feed}>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  )
}

export default GlobalFeed
