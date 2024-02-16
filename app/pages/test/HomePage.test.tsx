import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/components/HomePage'

describe('Home Page Component', () => {
  it('renders Navbar, HomePage, and Footer', () => {
    render(<HomePage />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('homepage')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
