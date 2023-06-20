import React, { useContext, useEffect } from 'react'
import { getUser } from '../../api'
import { CurrentUserContext } from '../../contexts/currentUser'

const CurrentUserChecker = ({ children }) => {
  const [user, setUser] = useContext(CurrentUserContext)

  const token = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    if (!token) return

    getUser(token, userId)
      .then(({ username }) => {
        setUser({
          isLoading: false,
          isLoggedIn: true,
          currentUser: username
        })
      })
      .catch(console.log)
  }, [])

  return children
}

export default CurrentUserChecker
