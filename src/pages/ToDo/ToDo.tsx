import { useRef, MutableRefObject } from 'react'

import styles from './todo.module.css'
import { useToDo } from './useToDo'
import About from './About'
import { ToDoListProp, ToDoType } from './types'

const {
  container,
  button,
  todoGrid,
  todo,
  userInput,
  card,
  greenHdr,
  trash,
  maroonHdr,
} = styles

const ToDo = () => {
  const inputTxt: MutableRefObject<null> = useRef(null)

  const {
    state,
    addToDo,
    handleEnter,
    updateCheckbox,
    deleteRow,
  } = useToDo(inputTxt)

  const ToDoList = ({ complete }: ToDoListProp) => {
    return (
      <div className={todoGrid}>
        {state.todoListArr
          .filter((row: ToDoType) => {
            if (complete) return row.completed === false
            else return row.completed === true
          })
          .map((row: ToDoType) => {
            return (
              <div className={card} key={row.id}>
                <div>
                  <input
                    id={row.id}
                    onChange={updateCheckbox}
                    type="checkbox"
                    checked={row.completed}
                  />
                </div>
                <div className={todo} id={row.id} onClick={updateCheckbox}>
                  {row.todo}
                </div>
                <div id={row.id} onClick={deleteRow} className={trash}>
                  🗑️
                </div>
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <>
      <About />
      <div className={container}>
        <div>
          <input
            className={userInput}
            onKeyUp={handleEnter}
            ref={inputTxt}
            type="text"
            autoFocus
          />
          <button onClick={addToDo} className={button}>
            Add
          </button>
        </div>
        <div className={greenHdr}>Active Todo</div>
        <div>
          <ToDoList complete />
        </div>
        <div className={maroonHdr}>Completed Todo</div>
        <div>
          <ToDoList complete={false} />
        </div>
      </div>
    </>
  )
}

export default ToDo
