import React, { Fragment, useRef, useState, useEffect } from 'react'
import styles from './customgrid.module.css'
import { usersListArr } from './data'
import About from './About'

const CustomGrid = () => {
  const [state, setState] = useState({
    userInputTxt: '',
    editedId: 0,
    allChecked: false,
    filtered: false,
    editedObj: {
      id: ' ',
      skill: ' ',
      experience: ' ',
      rate: 0,
    },
    editedElement: '',
    usersListArr,
    filteredUsersList: [],
    allchecked: false,
    unsortedListArr: [...usersListArr],
    sortOrder: 'def',
    orderNum: 0,
    sortedField: '',
  })

  const openEdit = (e: React.MouseEventHandler<HTMLSpanElement> | any) => {
    const tempState = { ...state }
    const editedId = e.target.id
    const editedElement = e.currentTarget.getAttribute('data-name')
    const editedObj = tempState.usersListArr.find((usersListObj) => {
      return parseInt(e.target.id) === usersListObj.id
    })

    setState((prevState: any) => {
      return {
        ...prevState,
        editedId,
        editedObj,
        editedElement,
      }
    })
  }

  const updateRow = (e: any) => {
    const tempState = { ...state }
    const theElement: any = state.editedElement
    const theObj: any = tempState.editedObj
    theObj[theElement] = e.target.value

    setState((prevState) => {
      return {
        ...prevState,
        usersListArr: tempState.usersListArr,
      }
    })
  }

  const handleEnter = (e: any) => {
    if (e.code === 'Enter') {
      e.currentTarget.blur()
    }
  }

  const addUser = () => {
    const tempState: any = { ...state }
    const usersArr = tempState.usersListArr
    const lastUserArr = usersArr[usersArr.length - 1]

    if (
      lastUserArr.name.trim().length === 0 ||
      lastUserArr.email.trim().length === 0 ||
      lastUserArr.username.trim().length === 0
    ) {
      alert('Please add a user.')
      return
    }

    const newUserObj = {
      id:
        !usersArr || usersArr.length === 0
          ? 1
          : usersArr[usersArr.length - 1].id + 1,
      name: ' ',
      username: ' ',
      email: ' ',
    }
    const usersListArr = [...tempState.usersListArr, newUserObj]

    setState((prevState) => {
      return {
        ...prevState,
        usersListArr,
      }
    })
  }

  const deleteUser = (e: any) => {
    const tempState = { ...state }
    const userArr = tempState.usersListArr
    let usersListArr: any
    if (userArr.length === 1) {
      userArr[0].id = 1
      userArr[0].name = ' '
      userArr[0].username = ' '
      userArr[0].email = ' '
      usersListArr = userArr
    } else {
      usersListArr = userArr.filter((row) => {
        return row.id !== parseInt(e.target.id)
      })
    }

    setState((prevState) => {
      return {
        ...prevState,
        usersListArr,
      }
    })
  }

  const sortGrid = (e: any) => {
    const tempState = { ...state }
    const field: string = e.target.id

    let updatedSortOrder = 'def',
      orderNum = 0

    if (state.sortOrder === 'def') {
      orderNum = 1
      updatedSortOrder = 'asc'
    } else if (state.sortOrder === 'asc') {
      orderNum = -1
      updatedSortOrder = 'des'
    } else if (state.sortOrder === 'des') {
      orderNum = 0
      updatedSortOrder = 'def'
    }
   
    setState((prevState) => {
      return {
        ...prevState,
        sortOrder: updatedSortOrder,
        sortedField: field,
      }
    })
    console.log('sort area')
    if (updatedSortOrder !== 'def') {
      tempState.usersListArr.sort((a: any, b: any) => {
        if (a[field] < b[field]) return -1 * orderNum
        else if (a[field] > b[field]) return 1 * orderNum
        else return 0
      })
    }

    setState((prevState) => {
      return {
        ...prevState,
        usersListArr:
          updatedSortOrder === 'def'
            ? [...tempState.unsortedListArr]
            : tempState.usersListArr,
        sortOrder: updatedSortOrder,
      }
    })
  }

  const selectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempState = { ...state }
    tempState.allChecked = !tempState.allChecked
    const auto = tempState.usersListArr
    let allCheck = false
    let checkedVal: boolean = state.allChecked === true ? true : false

    if (checkedVal) {
      allCheck = false
    } else {
      allCheck = true
    }

    auto.forEach((row) => {
      row.cbchecked = allCheck
    })

    setState((prevState) => {
      return {
        ...prevState,
        allChecked: tempState.allChecked,
        auto,
      }
    })
  }

  const rowCheck = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const tempState = { ...state }
    const auto = tempState.usersListArr
    // const selectedRowIndex = e.currentTarget.getAttribute('data-index');
    // if (selectedRowIndex) tempState.selectedRow = selectedRowIndex

    const selectedRow = auto.find((row) => {
      return row.id === parseInt(e.target.id)
    })

    if (selectedRow) {
      selectedRow.cbchecked = !selectedRow?.cbchecked
    }

    setState((prevState) => {
      return {
        ...prevState,
        // selectedRow: tempState.selectedRow,
        auto,
      }
    })
  }

  type UsersListArr = {
    id: number
    name: string
    username: string
    email: string
    cbchecked: boolean
  }

  // const userInputTxt = useRef(null)


  const userInputRef=useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('State ', state);
    const timerHandler = setTimeout(() => {
      handleSearch()
    }, 500)

    return () => {
      clearTimeout(timerHandler);
      if (userInputRef.current)
    
      userInputRef.current.focus();
    }
  }, [state, state.userInputTxt])

  const handleSearch = () => {
    const tempState = { ...state }
    const usersListArr: UsersListArr[] = tempState.usersListArr

    const filteredUsersList = usersListArr.filter((row) => {
      return (
        row.name.toLowerCase().includes(state.userInputTxt.toLowerCase()) ||
        row.username.toLowerCase().includes(state.userInputTxt.toLowerCase()) ||
        row.email.toLowerCase().includes(state.userInputTxt.toLowerCase())
      )
    })

    setState((prevState: any) => {
      return {
        ...prevState,
        filteredUsersList,
        filtered: true,
      }
    })
  }

  const getUserInputTxt = (e: any) => {
    const tempState = { ...state }
    const tempUserInputTxt = tempState.userInputTxt

    setState((prevState) => {
      return {
        ...prevState,
        userInputTxt: e.target.value,
      }
    })
  }


  return (
    <div className={pageContainer}>
      <About />
      <div className={info}></div>
      <p className={infoTxt}>
        To edit, just click on the cell, then use left/right arrow for
        correction or start typing to replace the entire text. Once editing is
        complete, just press Enter or click outside the cell. To add a new user,
        click on the Add button, then click on the first empty cell of the newly
        added row, type the text and press tab key to go to the next column.
      </p>
      {/* <input type="text" 
      // onChange={handleSearch} 
      ref={userInputTxt} /> */}

      <div
        style={{
          marginTop: 15,
          display: 'flex',
          justifyContent: 'right',
        }}
      >
       <label className={search}>Search</label>
       <input ref={userInputRef} className={searchInput} placeholder="Type a text to search" type="text" onChange={getUserInputTxt} />

      </div>
      <div id="grid" className={grid}>
        <div>
          <input
            id="selectAll"
            checked={state.allChecked}
            onChange={selectAll}
            type="checkbox"
          />
        </div>
        <div
          className={`${field} ${
            state.sortedField === 'name' &&
            (state.sortOrder === 'asc'
              ? arrowIconAsc
              : state.sortOrder === 'des'
              ? arrowIconDes
              : '')
          }`}
          id="name"
          onClick={sortGrid}
        >
          Name
        </div>
        <div
          className={`${field} ${
            state.sortedField === 'username' &&
            (state.sortOrder === 'asc'
              ? arrowIconAsc
              : state.sortOrder === 'des'
              ? arrowIconDes
              : '')
          }`}
          id="username"
          onClick={sortGrid}
        >
          Username
        </div>
        <div
          className={`${field} ${
            state.sortedField === 'email' &&
            (state.sortOrder === 'asc'
              ? arrowIconAsc
              : state.sortOrder === 'des'
              ? arrowIconDes
              : '')
          }`}
          id="email"
          onClick={sortGrid}
        >
          E-Mail
        </div>
        <div>Action</div>
        {state[state.filtered ? 'filteredUsersList' : 'usersListArr'].map(
          (
            {
              id,
              name,
              username,
              email,
              cbchecked,
            }: {
              id: number
              name: string
              username: string
              email: string
              cbchecked: boolean
            },
            index,
          ) => {
            const rowId: string = id.toString()
            return (
              <Fragment key={rowId}>
                <>
                  <div
                    id={rowId}
                    onClick={rowCheck}
                    className={cbchecked ? selRow : ''}
                  >
                    <input
                      id={id.toString()}
                      data-index={index}
                      onChange={() => false}
                      type="checkbox"
                      checked={cbchecked}
                    />
                  </div>
                  <div className={cbchecked ? selRow : ''}>
                    {!(
                      state.editedId.toString() === rowId &&
                      state.editedElement === 'name'
                    ) && (
                      <span
                        onFocus={(e) => e.currentTarget.click()}
                        tabIndex={0}
                        data-name="name"
                        id={rowId}
                        onClick={openEdit}
                      >
                        &nbsp;
                        {name}
                      </span>
                    )}
                    {state.editedId.toString() === rowId &&
                      state.editedElement === 'name' && (
                        <span>
                          <input
                            tabIndex={0}
                            onKeyUp={handleEnter}
                            onChange={updateRow}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                            data-name="name"
                            type="text"
                            value={name}

                            // placeholder='Click here to type'
                          />
                        </span>
                      )}
                  </div>
                  <div className={cbchecked ? selRow : ''}>
                    {!(
                      state.editedId.toString() === rowId &&
                      state.editedElement === 'username'
                    ) && (
                      <span
                        className={readOnlyTxt}
                        onFocus={(e) => e.currentTarget.click()}
                        tabIndex={0}
                        id={rowId}
                        onClick={openEdit}
                        data-name="username"
                      >
                        &nbsp;
                        {username}
                      </span>
                    )}
                    {state.editedId.toString() === rowId &&
                      state.editedElement === 'username' && (
                        <span>
                          <input
                            tabIndex={0}
                            onKeyUp={handleEnter}
                            onChange={updateRow}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                            data-name="username"
                            type="text"
                            value={username}
                            // placeholder='Click here to type'
                          />
                        </span>
                      )}
                  </div>

                  <div className={cbchecked ? selRow : ''}>
                    {!(
                      state.editedId.toString() === rowId &&
                      state.editedElement === 'email'
                    ) && (
                      <span
                        tabIndex={0}
                        onFocus={(e) => e.currentTarget.click()}
                        className={readOnlyTxt}
                        id={rowId}
                        onClick={openEdit}
                        data-name="email"
                      >
                        &nbsp;{email}
                      </span>
                    )}
                    {state.editedId.toString() === rowId &&
                      state.editedElement === 'email' && (
                        <span>
                          <input
                            tabIndex={0}
                            onKeyUp={handleEnter}
                            onChange={updateRow}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                            data-name="email"
                            type="text"
                            value={email}
                            // placeholder='Click here to type'
                          />
                        </span>
                      )}
                  </div>
                  <div className={cbchecked ? selRow : ''}>
                    <span
                      id={rowId}
                      className={deleteIcon}
                      onClick={deleteUser}
                    >
                      🗑️
                    </span>
                  </div>
                </>
              </Fragment>
            )
          },
        )}
      </div>
      <div
        style={{
          marginTop: 15,
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <button
          style={{
            cursor: 'pointer',
            width: 100,
            padding: '3px 10px',
            border: 'none',
            color: '#fff',
            backgroundColor: '#4681f4',
          }}
          onClick={addUser}
        >
          Add
        </button>
      </div>

      <div className={jsonHdr}>JSON data of the above grid</div>
      <div className={jsonView}>
        <pre>{JSON.stringify(state.usersListArr, null, 3)}</pre>
      </div>
    </div>
  )
}

const {
  grid,
  readOnlyTxt,
  info,
  jsonView,
  jsonHdr,
  infoTxt,
  field,
  arrowIconDes,
  arrowIconAsc,
  deleteIcon,
  selRow,
  pageContainer,
  search,
  searchInput
} = styles

export default CustomGrid
