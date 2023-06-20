import React, { useContext, useEffect } from 'react'
import { getUser } from '../../api'
import { CurrentUserContext } from '../../contexts/currentUserContext'

const CurrentUserChecker = ({ children }) => {
  const [user, setUser] = useContext(CurrentUserContext)

  const token = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    if (!token) return

    getUser(token, userId)
      .then(({ username }) => {
        setUser({
          isLoggedIn: true,
          username
        })
      })
      .catch(console.log)
  }, [])

  return children
}

export default CurrentUserChecker
