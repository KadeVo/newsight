import React from 'react'
import NewsList from './components/NewsList'
import Navbar from '@/app/components/Nav'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />

      <NewsList />
      <Footer />
    </div>
  )
}

export default Home
