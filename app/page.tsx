import React from 'react'
import NewsList from './components/NewsList'
import Navbar from '@/app/components/Nav'
import Footer from './components/Footer'
import GenericNewsPage from './components/GenericNewsPage'

const Home = () => {
  return (
    <div>
      <Navbar />

      <GenericNewsPage />
      <Footer />
    </div>
  )
}

export default Home
