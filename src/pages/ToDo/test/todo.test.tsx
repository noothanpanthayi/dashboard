import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import React, { Dispatch } from 'react'
import ToDo from '../ToDo'
import { JsxElement } from 'typescript'

// /* eslint-disable */

describe('Test ToDo Component ', () => {
  afterEach(cleanup)

  let tdContainer: any
  beforeEach(() => {
    // eslint-disable-next-line
    let { container } = render(<ToDo />)
    tdContainer = container
  })

  it('should have the textbox, button and the two sections in the opening page', async () => {
    expect(screen.getByRole('textbox')).toHaveTextContent('')
    expect(screen.getByRole('button')).toHaveTextContent('Add')

    // eslint-disable-next-line
    expect(tdContainer.getElementsByClassName('greenHdr')[0]).toHaveTextContent(
      'Active Todo',
    )

    expect(
      // eslint-disable-next-line
      tdContainer.getElementsByClassName('maroonHdr')[0],
    ).toHaveTextContent('Completed Todo')

    // expect(screen.getByText("Active Todo")).toBeInTheDocument();
    // expect(screen.getByText("Completed Todo")).toBeInTheDocument();
    // expect(await screen.findByText("Completed Todo")).toBeInTheDocument();

    const userInput = screen.getByRole('textbox')
    fireEvent.change(userInput, { target: { value: 'Bread' } })
    expect(userInput).toHaveValue('Bread')

    // fireEvent.click(screen.getByRole("button"));

    fireEvent.change(userInput, { target: { value: 'Bread' } })
    fireEvent.keyUp(userInput, { keyCode: 13, code: 'Enter' })
  })

  it('should add the todo text in a card once the text is entered into the textbox and Press Enter', async () => {
    const userInput = screen.getByRole('textbox')
    fireEvent.change(userInput, { target: { value: 'Bread' } })
    fireEvent.keyUp(userInput, { keyCode: 13, code: 'Enter' })

    // eslint-disable-next-line
    expect(tdContainer.getElementsByClassName('card')).toHaveLength(1)
    expect(screen.getByText('Bread')).toBeInTheDocument()
  })

  it('should add the todo text in a card once the text is entered into the textbox and clicked on the Add button', async () => {
    const userInput = screen.getByRole('textbox')
    fireEvent.change(userInput, { target: { value: 'Butter' } })
    fireEvent.click(screen.getByRole('button'))

    fireEvent.change(userInput, { target: { value: 'Milk' } })
    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText('Butter')).toBeInTheDocument()
    expect(screen.getByText('Milk')).toBeInTheDocument()
    // eslint-disable-next-line
    expect(tdContainer.getElementsByClassName('card')).toHaveLength(2)
  })

  it('should delete the row on clicking on the trash icon', async () => {
    const userInput = screen.getByRole('textbox')

    fireEvent.change(userInput, { target: { value: 'Butter' } })
    fireEvent.click(screen.getByRole('button'))

    fireEvent.change(userInput, { target: { value: 'Milk' } })
    fireEvent.click(screen.getByRole('button'))
    // eslint-disable-next-line
    const deleteButton = tdContainer.getElementsByClassName('trash')[0]
    fireEvent.click(deleteButton)
    // eslint-disable-next-line
    expect(tdContainer.getElementsByClassName('card')).toHaveLength(1)
  })

  it('should the checkbox be checked on click', () => {
    const userInput = screen.getByRole('textbox')

    fireEvent.change(userInput, { target: { value: 'Butter' } })
    fireEvent.click(screen.getByRole('button'))

    fireEvent.change(userInput, { target: { value: 'Milk' } })
    fireEvent.click(screen.getByRole('button'))

    fireEvent.click(screen.getAllByTestId('checkbox')[0])
    expect(screen.getAllByTestId('checkbox')[1]).toBeChecked()
  })

  it('should update the state', async () => {
    type ToDoList={
            id: string,
            todo: string,
            completed: boolean,
    }

    interface ToDoObj{
        activeTab: number;
        activeTotal: number;
        completedTotal: number;
        todoListArr:ToDoList[]
    }

    const data:ToDoObj[] = [
      {
        activeTab: 1,
        activeTotal: 0,
        completedTotal: 0,
        todoListArr: [
          {
            id: '1002',
            todo: 'Buy Milk',
            completed: false,
          },
          {
            id: '1003',
            todo: 'Get Butter',
            completed: false,
          },
        ],
      },
    ]

    // eslint-disable-next-line
    jest.spyOn(React, 'useState').mockImplementation(():any=>data)
    let { container } = render(<ToDo />)
    // eslint-disable-next-line
    expect(container.getElementsByClassName('card')).toHaveLength(2)
  })
})
