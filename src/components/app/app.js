import React from 'react'
import Routes from '../../routes'
import Header from '../header/header'
import { CurrentUserProvider } from '../../contexts/currentUserContext'
import CurrentUserChecker from '../current-user-checker/current-user-checker'

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <div className='app'>
          <Header />
          <Routes />
        </div>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

export default App
