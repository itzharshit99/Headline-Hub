import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import News from './components/News.jsx'
import TopHeadlines from './components/TopHeadlines.jsx'
import CountryNews from './components/CountryNews.jsx'

function App() {
  return (
    <>
      <div className='w-full'>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<News/>}/>
          <Route path='/top-headlines/:category'element={<TopHeadlines/>}/>
          <Route path='/country/:iso' element={<CountryNews/>}/>
        </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App