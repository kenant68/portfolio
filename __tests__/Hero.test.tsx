import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders TEKBAS', () => {
    render(<Hero />)
    expect(screen.getByText('TEKBAS')).toBeInTheDocument()
  })

  it('renders Kenan', () => {
    render(<Hero />)
    expect(screen.getByText('Kenan')).toBeInTheDocument()
  })

  it('renders the Full Stack Developer title', () => {
    render(<Hero />)
    expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument()
  })
})
