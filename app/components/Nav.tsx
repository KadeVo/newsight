'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] =
    useState(false)
  const [isLocationDropdownVisible, setLocationDropdownVisible] =
    useState(false)

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-end items-center space-x-8">
      <Link href="/">
        <p className="pursor-pointer">Home</p>
      </Link>
      <Link href="/pages">
        <p className="cursor-pointer">Pages</p>
      </Link>

      <div
        className="relative group"
        onMouseEnter={() => {
          setCategoryDropdownVisible(true)
        }}
      ></div>
    </nav>
  )
}

export default Navbar
