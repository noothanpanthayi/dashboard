import React, { Fragment, useState } from 'react'
import styles from './customgrid.module.css'
import { usersListArr } from './data'
import About from './About'

const CustomGrid = () => {
  const [state, setState] = useState({
    editedId: 0,
    editedObj: {
      id: ' ',
      skill: ' ',
      experience: ' ',
      rate: 0,
    },
    editedElement: '',
    usersListArr,
    unsortedListArr: [...usersListArr],
    sortOrder: 'def',
    orderNum: 0,
    sortedField:''
  })

  const openEdit = (e: React.MouseEventHandler<HTMLSpanElement> | any) => {
    const tempState = { ...state }
    const editedId = e.target.id.toString()
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
        sortedField:field
      }
    })

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

  return (
    <>
      <About />
      <div className={info}></div>
      <p className={infoTxt}>
        To edit, just click on the cell, then use left/right arrow for
        correction or start typing to replace the entire text. Once editing is
        complete, just press Enter or click outside the cell. To add a new user,
        click on the Add button, then click on the first empty cell of the newly
        added row, type the text and press tab key to go to the next column.
      </p>
      <div id="grid" className={grid}>
        <div className={`${field} ${state.sortedField==='name' && (state.sortOrder==='asc'?arrowIconAsc:state.sortOrder==='des'?arrowIconDes:'')}`} id="name" onClick={sortGrid}>
          Name
        </div>
        <div className={`${field} ${state.sortedField==='username' && (state.sortOrder==='asc'?arrowIconAsc:state.sortOrder==='des'?arrowIconDes:'')}`} id="username" onClick={sortGrid}>
          Username
        </div>
        <div className={`${field} ${state.sortedField==='email' && (state.sortOrder==='asc'?arrowIconAsc:state.sortOrder==='des'?arrowIconDes:'')}`} id="email" onClick={sortGrid}>
          E-Mail
        </div>
        <div>Action</div>
        {state?.usersListArr.map(
          ({
            id, 
            name,
            username,
            email,
          }: {
            id: number
            name: string
            username: string
            email: string
          }) => {
            const rowId: string = id.toString()
            return (
              <Fragment key={rowId}>
                <>
                  <div>
                    {!(
                      state.editedId.toString() === rowId &&
                      state.editedElement === 'name'
                    ) && (
                      <span
                        className={readOnlyTxt}
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
                  <div>
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

                  <div>
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
                  <div
                    id={rowId}
                    style={{ cursor: 'pointer' }}
                    onClick={deleteUser}
                  >
                    🗑️
                  </div>
                </>
              </Fragment>
            )
          },
        )}
      </div>
      <div
        style={{
          maxWidth: 780,
          marginTop: 5,
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
    </>
  )
}

const { grid, readOnlyTxt, info, jsonView, jsonHdr, infoTxt, field, arrowIconDes, arrowIconAsc} = styles

export default CustomGrid
