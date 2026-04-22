import { render, screen } from '@testing-library/react'
import Links from '@/components/Links'

describe('Links', () => {
  it('has the correct GitHub link', () => {
    render(<Links />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/kenant68')
  })

  it('has the correct LinkedIn link', () => {
    render(<Links />)
    const link = screen.getByRole('link', { name: /linkedin/i })
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/kenan-tekbas/')
  })

  it('has the correct email link', () => {
    render(<Links />)
    const link = screen.getByRole('link', { name: /email/i })
    expect(link).toHaveAttribute('href', 'mailto:tekbask8@gmail.com')
  })
})
