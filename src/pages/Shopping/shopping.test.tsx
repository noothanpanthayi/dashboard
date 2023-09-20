import { fireEvent, screen, waitFor } from '@testing-library/react'
import Shopping from './Shopping'
import { renderWithProviders } from './utils/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { data } from './utils/mockdata'
import { mockhandler } from './utils/mockServer'



describe('Shopping Test Suite ', () => {

    mockhandler('https://dummyjson.com/products', data);

  it('should render the products on load of the page ', async () => {
    renderWithProviders(
      <Router>
        <Shopping />
      </Router>,
    )

    await waitFor(() => {
      expect(screen.getByText('Galaxy A712')).toBeInTheDocument()
      expect(data.products.length).toBe(2)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(2)
      fireEvent.click(buttons[0])
      expect(window.location.pathname).toBe('/cart')
    })
  })

  
})
