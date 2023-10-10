import React from 'react'
import NewsList from './components/NewsList'
import Navbar from '@/app/components/Nav'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My News App</h1>
      <NewsList />
    </div>
  )
}

export default Home
