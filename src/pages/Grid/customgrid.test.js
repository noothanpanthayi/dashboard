import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react'

import CustomGrid from './CustomGrid'

describe('Grid Testing Suite', () => {
  it('should render the grid page', () => {
    render(<CustomGrid />)
    const cbs = screen.getAllByRole('checkbox')
    expect(cbs.length).toBe(11)
  })

  it('should test the word entered in the textbox exist', () => {
    render(<CustomGrid />)
    const inputElement = screen.getByPlaceholderText('Type a text to search')
    fireEvent.change(inputElement, {
        target: { value: 'Dennis' },
      })

    expect(inputElement.value).toBe("Dennis")
    // expect(screen.getByDisplayValue('Dennis') === inputElement).toBe(true)
  })

  it('should render the search', async () => {
    render(<CustomGrid />)
    const inputElement = screen.getByPlaceholderText('Type a text to search')

    fireEvent.change(inputElement, {
      target: { value: 'Dennis' },
    })

    await waitFor(() => {
      const cbs = screen.getAllByRole('checkbox')
      expect(cbs.length).toBe(2)
    })

  })

  it("should check the availability of the button", ()=>{
    render(<CustomGrid/>);
    const btn=screen.getByRole('button', {
        name: /Add/i
      });
      expect(btn).toBeInTheDocument();
      fireEvent.click(btn);
      const cbs = screen.getAllByRole('checkbox')
      expect(cbs.length).toBe(12)
  })

//   it("should check the availability of the button sefe", ()=>{
//     render(<CustomGrid/>);
//    const addSpy=jest.spyOn(CustomGrid, 'addUser').mockImplementation(()=>"fantastic");
//     const btn=screen.getByRole('button', {
//         name: /Add/i
//       });
//       expect(btn).toBeInTheDocument();
//       fireEvent.click(btn);
//       expect(addSpy).toBeCalled();
//   })




})
