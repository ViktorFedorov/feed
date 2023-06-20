import React, { useContext, useEffect, useState } from 'react'
import { registration } from '../../api'
import styles from './authentication.module.css'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/currentUserContext'
import ErrorMessages from '../../components/error-messages/error-messages'

const Authentication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successSubmit, setSuccessSubmit] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formFields, setFormFields] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [, setUser] = useContext(CurrentUserContext)

  const { pathname } = useLocation()
  const isLoginPage = pathname === '/login'
  const pageTitle = isLoginPage ? 'Sign In' : 'Sign Up'
  const descriptionLink = isLoginPage ? 'Need an account?' : 'Have an account?'
  const linkPath = isLoginPage ? '/register' : '/login'
  const endpoint = isLoginPage ? 'login' : 'register'

  useEffect(() => {
    if (!isSubmitting) return

    registration(endpoint, formFields)
      .then(({ accessToken, user }) => {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('userId', user.id)
        setSuccessSubmit(true)
        setUser({
          isLoggedIn: true,
          username: user.username
        })
        setFormFields({
          username: '',
          email: '',
          password: ''
        })
      })
      .catch((error) => {
        setError(true)
        setErrorMessage(error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  })

  const handleInput = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }

  if (successSubmit) {
    return <Navigate to='/' />
  }

  return (
    <div className={styles.auth}>
      <h1 className={styles.heading}>{pageTitle}</h1>
      <p className={styles.description}>
        <Link to={linkPath}>{descriptionLink}</Link>
      </p>
      {error && <ErrorMessages errorMessage={errorMessage} />}
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLoginPage && (
          <input
            onChange={handleInput}
            value={formFields.username}
            type='text'
            placeholder='Username'
            className={styles.input}
            name='username'
          />
        )}
        <input
          onChange={handleInput}
          value={formFields.email}
          type='email'
          placeholder='Email'
          className={styles.input}
          name='email'
        />
        <input
          onChange={handleInput}
          value={formFields.password}
          type='password'
          placeholder='Password'
          className={styles.input}
          name='password'
        />
        <button type='submit' className={styles.submit} disabled={isSubmitting}>
          {pageTitle}
        </button>
      </form>
    </div>
  )
}

export default Authentication
