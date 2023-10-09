import React, { useEffect, useRef, useState } from 'react'

export const useToDo = (inputTxt: any) => {
  let todoObj = {
    id: '',
    todo: '',
    completed: false,
  }

  type TypeToDoObj ={
    id: string,
    todo: string,
    completed: boolean,
  }

  const [state, setState] = useState({
    activeTab: 1,
    activeTotal: 0,
    completedTotal: 0,
    todoListArr: [],
  })

  const deleteRow = (e: React.MouseEventHandler<HTMLDivElement> | any) => {
    const tempState: any = { ...state }

    const todoListArr = tempState.todoListArr.filter((row: any) => {
      return row.id !== e.target.id
    })

    setState((prevState) => {
      return {
        ...prevState,
        todoListArr,
      }
    })
  }

  const handleEnter = (e: any) => {
    if (e.code === 'Enter') {
      addToDo(e)
    }
  }

  const updateTab = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => {
      return {
        ...prevState,
        activeTab: parseInt(e.target.id),
      }
    })
  }

  const updateCheckbox = (e:any) => {
    const tempState = { ...state }

    const selectedObj:TypeToDoObj|any= tempState.todoListArr.find(
      (row: TypeToDoObj) => {
        return row.id === e.target.id
      },
    )

    selectedObj.completed = !selectedObj?.completed

    setState((prevState: any) => {
      return {
        ...prevState,
        todoListArr: tempState.todoListArr,
      }
    })
  }

  const addToDo = (e: any) => {
    if (!inputTxt.current.value) return

    const tempState = { ...state }

    const todoListArr: any = tempState.todoListArr

    todoObj = {
      id:
        !todoListArr || todoListArr.length === 0
          ? '1'
          : (parseInt(todoListArr[todoListArr.length - 1].id) + 1).toString(),
      todo: inputTxt.current.value,
      completed: false,
    }

    setState((prevState: any) => {
      const todoListArr = [...prevState.todoListArr, todoObj]
      return {
        ...prevState,
        todoListArr,
        activeTotal: prevState.activeTotal + 1,
      }
    })
  }

  useEffect(() => {
    return () => {
      if (inputTxt && inputTxt.current) inputTxt.current.value = ''
    }
  })
  return {
    addToDo,
    state,
    handleEnter,
    updateCheckbox,
    updateTab,
    deleteRow,
  }
}
