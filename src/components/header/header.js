import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'
import { CurrentUserContext } from '../../contexts/currentUserContext'

const Header = () => {
  const [{ isLoggedIn }] = useContext(CurrentUserContext)

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        Conduit
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to='/' className={styles.navlink}>
              Home
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to='/login' className={styles.navlink}>
                  Sign in
                </NavLink>
              </li>
              <li>
                <NavLink to='/register' className={styles.navlink}>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/articles/new' className={styles.navlink}>
                New Post
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
