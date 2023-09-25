import { fireEvent, screen, waitFor } from '@testing-library/react'
import Shopping from './Shopping'
import { renderWithProviders } from './utils/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { data } from './utils/mockdata'
import { mockhandler } from './utils/mockServer'

describe('Shopping Test Suite', () => {

  mockhandler('https://dummyjson.com/products', data)

  it('should render the products on load of the page', async () => {
    renderWithProviders(
      <Router>
        <Shopping />
      </Router>,
    )

    await waitFor(() => {
      expect(screen.getByText('Galaxy A712')).toBeInTheDocument()
    // eslint-disable-next-line
      expect(data.products.length).toBe(2)
      const buttons = screen.getAllByRole('button')
    // eslint-disable-next-line
      expect(buttons).toHaveLength(2)
    // eslint-disable-next-line
      fireEvent.click(buttons[0])
    // eslint-disable-next-line
      expect(window.location.pathname).toBe('/cart')
    })
  });
  
})
