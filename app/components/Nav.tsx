'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-end items-center space-x-8">
      <Link href="/">
        <p className="cursor-pointer hover:text-gray-300 transition">Home</p>
      </Link>
      <Link href="/pages">
        <p className="cursor-pointer hover:text-gray-300 transition">Pages</p>
      </Link>
    </nav>
  )
}

export default Navbar
