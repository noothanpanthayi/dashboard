import React, { useState, useEffect, Fragment } from 'react'
import styles from './checkall.module.css'

const CheckAll = () => {
  const [state, setState] = useState({
    allChecked: false,
    auto: [
      {
        id: '1001',
        make: 'Toyota',
        model: 'Camry',
        year: '2023',
        cbchecked: false,
        selectedRow: false,
      },
      {
        id: '1002',
        make: 'Honda',
        model: 'City',
        year: '2024',
        cbchecked: false,
        selectedRow: false,
      },
      {
        id: '1003',
        make: 'Ford',
        model: 'Fusion',
        year: '2025',
        cbchecked: false,
        selectedRow: false,
      },
    ],
  })

  type autoType = {
    id: string
    make: string
    model: string
    year: string
    cbchecked: boolean
  }

  const selectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempState = { ...state }
    tempState.allChecked = !tempState.allChecked
    const auto = tempState.auto
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
    const auto = tempState.auto
    // const selectedRowIndex = e.currentTarget.getAttribute('data-index');
    // if (selectedRowIndex) tempState.selectedRow = selectedRowIndex

    const selectedRow = auto.find((row) => {
      return row.id === e.target.id
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
  let totCol = 11

  return (
    <div className={`${grid} ${totCol}`}>
      <div>
        <input
          id="selectAll"
          checked={state.allChecked}
          onChange={selectAll}
          type="checkbox"
        />
      </div>
      <div>Id</div>
      <div>Make</div>
      <div>Model</div>
      <div>Year</div>
      {state.auto?.map(
        ({ id, make, model, year, cbchecked, selectedRow }, index) => {
          return (
            <Fragment key={id}>
              <div    onClick={rowCheck} className={cbchecked ? selRow : ''}>
                <input
                  id={id}
                  data-index={index}
                  onChange={rowCheck}
                  type="checkbox"
                  checked={cbchecked}
                />
              </div>
              <div
                id={id}
                onClick={rowCheck}
                className={cbchecked ? selRow : ''}
              >
                {id}
              </div>
              <div
                id={id}
                onClick={rowCheck}
                className={cbchecked ? selRow : ''}
              >
                {make}
              </div>
              <div
                id={id}
                onClick={rowCheck}
                className={cbchecked ? selRow : ''}
              >
                {model}
              </div>
              <div
                id={id}
                onClick={rowCheck}
                className={cbchecked ? selRow : ''}
              >
                {year}
              </div>
            </Fragment>
          )
        },
      )}
    </div>
  )
}

const { grid, selRow } = styles
export default CheckAll
