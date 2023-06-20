import { createContext, useState } from 'react'
export const CurrentUserContext = createContext(null)

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: null,
    username: null
  })

  return (
    <CurrentUserContext.Provider value={[user, setUser]}>
      {children}
    </CurrentUserContext.Provider>
  )
}
