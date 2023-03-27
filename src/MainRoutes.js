import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage' 
import Layout from './components/Layout'
import NewsPage from './components/NewsPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout></Layout>}>
            <Route index element={<HomePage></HomePage>} />
            <Route path='about' element={<AboutPage></AboutPage>} />
            <Route path='news' element={<NewsPage></NewsPage>} />
        </Route>
    </Routes>
  )
}

export default MainRoutes;
