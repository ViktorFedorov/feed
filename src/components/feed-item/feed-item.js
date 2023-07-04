import React, { useState } from 'react'
import styles from './feed-item.module.css'
import avatar from '../../images/avatar2.png'

const FeedItem = ({ title, text }) => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => () => setLikes(likes + 1)

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.author}>
          <img src={avatar} alt='' className={styles.avatar} />
          <div>
            <p className={styles.name}>author</p>
            <p className={styles.date}>July 1, 2023</p>
          </div>
        </div>
        <button className={styles.like} onClick={handleLike()}>
          {likes}
        </button>
      </div>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <button className={styles.more}>read more...</button>
    </li>
  )
}

export default FeedItem
