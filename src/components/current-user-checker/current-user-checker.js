import React, { useContext, useEffect } from 'react'
import { getUser } from '../../api'
import { CurrentUserContext } from '../../contexts/currentUser'

const CurrentUserChecker = ({ children }) => {
  const [user, setUser] = useContext(CurrentUserContext)

  const token = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    getUser(token, userId).then(console.log)
  }, [])

  return children
}

export default CurrentUserChecker
