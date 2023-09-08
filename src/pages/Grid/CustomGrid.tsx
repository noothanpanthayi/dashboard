import React, { Fragment, useState, useEffect } from 'react'
import styles from './customgrid.module.css'
import { usersListArr } from './data'
import About from './About'

const CustomGrid = () => {
  const [state, setState] = useState({
    editedId: 0,
    editedObj: {
      id: '',
      skill: '',
      experience: '',
      rate: 0,
    },
    editedElement: '',
    usersListArr,
  })

  const openEdit = (e: React.MouseEventHandler<HTMLSpanElement> | any) => {
    const tempState = { ...state }
    const editedId = (e.target.id).toString();
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

  return (
    <>
       <About/>
      <div className={info}></div>
      <p className={infoTxt}>To edit, just click on the text you want to edit, then use left/right arrow for correction or backspace to remove the entire text and retype. Once editing is complete, just press Enter</p>
      <div id="grid" className={grid}>
        <div>Name</div>
        <div>Username</div>
        <div>E-Mail</div>

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
            const rowId: string = id.toString();
            return (
              <Fragment key={rowId}>
                <>
                  <div>
                    {!(
                      (state.editedId).toString() === rowId && state.editedElement === 'name'
                    ) && (
                      <span data-name="name" id={rowId} onClick={openEdit}>
                        {name}
                      </span>
                    )}
                    {(state.editedId).toString() ===rowId && state.editedElement === 'name' && (
                      <span>
                        <input
                          onKeyUp={handleEnter}
                          onChange={updateRow}
                          onFocus={(e) => e.target.select()}
                          autoFocus
                          data-name="name"
                          type="text"
                          value={name}
                        />
                      </span>
                    )}
                  </div>
                  <div>
                    {!(
                     (state.editedId).toString()===rowId &&
                      state.editedElement === 'username'
                    ) && (
                      <span id={rowId} onClick={openEdit} data-name="username">
                        &nbsp;
                        {username}
                      </span>
                    )}
                    {(state.editedId).toString() ===rowId &&
                      state.editedElement === 'username' && (
                        <span>
                          <input
                            onKeyUp={handleEnter}
                            onChange={updateRow}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                            data-name="username"
                            type="text"
                            value={username}
                          />
                        </span>
                      )}
                  </div>

                  <div>
                    {!(
                      (state.editedId).toString() ===rowId &&
                      state.editedElement === 'email'
                    ) && (
                      <span className={readOnlyTxt} id={rowId} onClick={openEdit} data-name="email">
                     &nbsp;{email}
                      </span>
                    )} 
                    { (state.editedId).toString() ===rowId && state.editedElement === 'email' && (
                      <span>
                        <input
                          onKeyUp={handleEnter}
                          onChange={updateRow}
                          onFocus={(e) => e.target.select()}
                          autoFocus
                          data-name="email"
                          type="text"
                          value={email}
                        />
                      </span>
                    )}
                  </div>
                </>
              </Fragment>
            )
          },
        )}
     
      </div>
     
      <div className={jsonHdr}>JSON data of the above grid</div>
      <div className={jsonView}>
     
        <pre>
        {JSON.stringify(state.usersListArr,null, 3)}
        </pre>
        </div>
    </>
  )
}

const { grid, readOnlyTxt, info, jsonView, jsonHdr, infoTxt } = styles

export default CustomGrid
