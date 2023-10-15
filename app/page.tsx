import React from 'react'
import NewsList from './components/NewsList'
import Navbar from '@/app/components/Nav'

const Home = () => {
  return (
    <div>
      <Navbar />

      <NewsList />
    </div>
  )
}

export default Home
