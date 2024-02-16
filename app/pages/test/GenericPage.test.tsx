import React from 'react'
import { render, screen } from '@testing-library/react'
import Generic from '../GenericPage'

describe('Display generic Page', () => {
  it('renders Navbar & generic page info', () => {
    render(<Generic />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('generic')).toBeInTheDocument()
    expect(screen.getByText('Top Stories')).toBeInTheDocument()
  })
})
