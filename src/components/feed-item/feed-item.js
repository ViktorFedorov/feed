import React from 'react'
import styles from './feed-item.module.css'
import avatar from '../../images/avatar2.png'

const FeedItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div className={styles.author}>
          <img src={avatar} alt='' className={styles.avatar} />
          <div>
            <p className={styles.name}>author</p>
            <p className={styles.date}>July 1, 2023</p>
          </div>
        </div>
        <button className={styles.like}>0</button>
      </div>
      <h2 className={styles.heading}>testing</h2>
      <p className={styles.text}>Jut testing there feature</p>
      <button className={styles.more}>read more...</button>
    </div>
  )
}

export default FeedItem
