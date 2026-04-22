import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders the name input', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders the message textarea', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })
})
