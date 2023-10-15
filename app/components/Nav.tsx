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
      <Link href="/pages">
        <p className="cursor-pointer">Pages</p>
      </Link>

      <div
        className="relative group"
        onMouseEnter={() => {
          setCategoryDropdownVisible(true)
        }}
      >
        Categories
        {isCategoryDropdownVisible && (
          <div
            className="absolute left-0 mt-2 p-2 bg-gray-700"
            onMouseLeave={() => {
              setCategoryDropdownVisible(false)
            }}
          >
            <p className="cursor-pointer">Business</p>
            <p className="cursor-pointer">Entertainment</p>
            <p className="cursor-pointer">General</p>
            <p className="cursor-pointer">Health</p>
            <p className="cursor-pointer">Science</p>
            <p className="cursor-pointer">Sports</p>
            <p className="cursor-pointer">Technology</p>
          </div>
        )}
      </div>
      <div
        className="relative group"
        onMouseEnter={() => {
          setLocationDropdownVisible(true)
        }}
      >
        Locations
        {isLocationDropdownVisible && (
          <div
            className="absolute left-0 mt-2 p-2 bg-gray-700"
            onMouseLeave={() => {
              setLocationDropdownVisible(false)
            }}
          >
            <p className="cursor-pointer">USA</p>
            <p className="cursor-pointer">Korea</p>
            <p className="cursor-pointer">Japan</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
