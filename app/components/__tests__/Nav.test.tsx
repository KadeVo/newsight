import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '../Nav'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Navbar Component', () => {
  it('renders Navbar with correct links', () => {
    render(<Navbar />)

    expect(screen.getByText('Home')).toBeInTheDocument()

    expect(screen.getByText('Pages')).toBeInTheDocument()
  })

  it('navigates to the correct route when clicked', () => {
    ;(useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    })

    render(<Navbar />)

    expect((useRouter as jest.Mock).mock.calls[0][0]).toBe('/')

    screen.getByText('Pages').click()

    expect((useRouter as jest.Mock).mock.calls[1][0]).toBe('/pages')
  })
})
