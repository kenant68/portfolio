import { render, screen } from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
  it('renders the tagline', () => {
    render(<About />)
    expect(screen.getByText('Building things for the web.')).toBeInTheDocument()
  })
})
