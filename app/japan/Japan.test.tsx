import Japan from './page'
import { render, screen } from '@testing-library/react'

test('renders Japan page', () => {
  render(<Japan />)

  const navbarElement = screen.getByText(/Pages/i)
  expect(navbarElement).toBeInTheDocument()

  const japanListElement = screen.getByText(/Top Stories in Japan/i)
  expect(japanListElement).toBeInTheDocument()
})
