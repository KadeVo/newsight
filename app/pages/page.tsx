import React from 'react'
import PagesList from '@/app/components/PagesList'
import Navbar from '@/app/components/Nav'

const Pages = () => {
  return (
    <div>
      <Navbar />
      <h1>Todays News</h1>
      <PagesList />
    </div>
  )
}

export default Pages
