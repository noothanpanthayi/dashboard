import { useRef, MutableRefObject } from 'react'

import styles from './todo.module.css'
import { useToDo } from './useToDo'
import About from './About'
import { ToDoListProp, ToDoType } from './types'

const ToDo = () => {
  const inputTxt: MutableRefObject<null> = useRef(null);

  const {
    state,
    addToDo,
    handleEnter,
    updateCheckbox,
    deleteRow,
  } = useToDo(inputTxt);

  const ToDoList = ({ complete, header }: ToDoListProp) => {
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
                    data-testid="checkbox"
                    id={row.id}
                    onChange={updateCheckbox}
                    type="checkbox"
                    checked={row.completed}
                  />
                </div>
                <div className={`${header}__todo`} id={row.id} onClick={updateCheckbox}>
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
            name="the-inputs-id"
          />
          <button onClick={addToDo} className={tdButton}>
            Add
          </button>
        </div>
        <div id="pending" className={greenHdr}>Active Todo</div>
        <div>
          <ToDoList complete header="greenHdr" />
        </div>
        <div id="completed" className={maroonHdr}>Completed Todo</div>
        <div>
          <ToDoList complete={false} header="maroonHdr" />
        </div>
      </div>
    </>
  )
}

const {
  container,
  tdButton,
  todoGrid,
  todo,
  userInput,
  card,
  greenHdr,
  trash,
  maroonHdr,
  greenHdr__todo
} = styles

export default ToDo
