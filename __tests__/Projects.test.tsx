import { render, screen } from '@testing-library/react'
import Projects from '@/components/Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText(/selected works/i)).toBeInTheDocument()
  })

  it('renders the coming soon placeholder', () => {
    render(<Projects />)
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
  })
})
