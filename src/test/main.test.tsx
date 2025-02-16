import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('Main.tsx', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})