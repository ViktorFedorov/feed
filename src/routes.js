import { Routes, Route } from 'react-router-dom'
import GlobalFeed from './pages/global-feed/global-feed'
import Article from './pages/article/article'
import Authentication from './pages/authentication/authentication'

export default () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed />} />
      <Route path='/login' element={<Authentication />} />
      <Route path='/register' element={<Authentication />} />
      <Route path='/articles/:id' element={<Article />} />
    </Routes>
  )
}
