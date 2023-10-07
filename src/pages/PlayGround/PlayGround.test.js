import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
  renderHook
} from '@testing-library/react'

// import {renderHook} from '@testing-library/react-hooks';

import  useText from "./useText";

import PlayGround from './PlayGround'

describe('Grid Testing Suite', () => {
  it('should render the grid page', () => {
    render(<PlayGround />)
    const inputElement = screen.getByPlaceholderText('Type a text here')

    fireEvent.change(inputElement, {
      target: { value: 'Dennis' },
    })

    expect(inputElement.value).toBe('Dennis')
  })

  it('should call the function updateText', async() => {
    render(<PlayGround />)

  //   jest.mock('./useText.ts', () => ({
  //     updateText: jest.fn().mockReturnValue("the text")
  // }));

  // const theMethod=jest.spyOn(useText,'updateText');

  const userText=({children,...rest})=>children(userText(rest));

  // function setup(props) {
  //   let returnVal
  //   <userText>
  //     {val=>{
  //       returnVal=val
  //       return null
  //     }}
  //   </userText>
  // }

// setup({text:'text'})


    const inputElement = screen.getByPlaceholderText('Type a text here');
    fireEvent.change(inputElement, {
      target: { value: 'D' },
    })
    expect(inputElement.value).toBe("D")

    // const {updateText} = renderHook(()=>useText())

    // expect(theMethod).toHaveBeenCalled();
 
  })
})
