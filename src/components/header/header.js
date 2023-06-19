import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
