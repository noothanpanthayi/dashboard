import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from './stickynotes.module.css'
import About from './About'
import { Switch } from '@mui/material'

export const Stickynotes = () => {
  type StickyNote = {
    id: string
    color: string
    notes: string
    tiltdeg: string
    notefull: boolean
  }

  interface STATE {
    stickynotes: StickyNote[]
    editmode: boolean
    draggedItem: any
    writable: boolean
  }

  const [state, setState] = useState<STATE>({
    stickynotes: [
      {
        id: '1',
        color: 'f9fa46',
        notes: `React application that mimics the classic sticky note experience. 
      Just try adding a note, click outside to save and double click to delete`,
        tiltdeg: '-2',
        notefull: false,
      },
    ],
    editmode: false,
    draggedItem: {},
    writable: true,
  })

  let dragItemId: any

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    dragItemId = id

    const draggedItem = state.stickynotes.find((item) => {
      return item.id === id
    })

    const { target } = e
    if (target instanceof HTMLElement) {
      const classList = target.classList // DOMTokenList
      classList.remove('redsquare')
    }

    setState((prev: any) => {
      return {
        ...prev,
        draggedItem,
      }
    })
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const { target } = e
    if (target instanceof HTMLElement) {
      const classList = target.classList // DOMTokenList
      classList.remove('redsquare')
    }

    const tempState: any = { ...state }

    const draggedIndex = state.stickynotes.findIndex((item) => {
      return item.id === state.draggedItem.id
    })

    const droppedIndex = state.stickynotes.findIndex((item) => {
      return item.id === id
    })

    const droppedItem = state.stickynotes.find((item) => {
      return item.id === id
    })

    tempState.stickynotes.splice(droppedIndex, 1, tempState.draggedItem)
    tempState.stickynotes.splice(draggedIndex, 1, droppedItem)

    //  e.target?.classList.remove('redsquare')

    setState((prevState) => {
      localStorage.setItem('state', JSON.stringify(prevState))
      return {
        ...prevState,
        stickynotes: tempState.stickynotes,
      }
    })
  }

  const saveNote = (e: any) => {
    setState((prevState: any) => {
      const tempState = { ...prevState }

      const selectedStickyNote = tempState.stickynotes.find(
        (stickynote: StickyNote) => {
          return stickynote.id === e.target.id
        },
      )

      selectedStickyNote.notes = e.target.innerText

      localStorage.setItem('state', JSON.stringify(prevState))

      return {
        ...prevState,
        stickynotes: [...prevState.stickynotes],
      }
    })
  }

  const addNote = () => {
    const noteColors = [
      'fff9b1',
      'daf7a1',
      'ffcc00',
      'c9df56',
      'ff9d48',
      'b6d7a8',
      'ff0000',
      '77ccc7',
      'eca2c4',
      '6ed8fa',
      'ffcee0',
      'b1d3f6',
      'eae902',
      'fcb38a',
      'f9fa46',
    ]

    const tilts = [-1, 5, -2, 4, -3, 3, -4, 2, -5, 1]
    const tiltdeg = String(tilts[Math.floor(Math.random() * tilts.length)])
    const color = noteColors[Math.floor(Math.random() * noteColors.length)]
    const tempStickynotes = [...state.stickynotes]
    tempStickynotes.sort((a, b) => Number(a.id) - Number(b.id))

    const lastId = String(
      parseInt(tempStickynotes[tempStickynotes.length - 1]?.id) + 1,
    )
    const stickynote: StickyNote = {
      id: state.stickynotes.length === 0 ? '1' : lastId,
      color,
      notes: '',
      tiltdeg,
      notefull: false,
    }

    setState((prevState) => {
      prevState.stickynotes = [...prevState.stickynotes, stickynote]
      return {
        ...prevState,
        writable: true,
      }
    })
  }

  useEffect(() => {
    let lsString: any = localStorage?.getItem('state')
    let localState: Storage = JSON.parse(lsString)

    setState((prevState) => {
      return {
        ...prevState,
        ...localState,
      }
    })
  }, [])

  useEffect(() => {
    console.log('State ', state)
  })

  const removestickynotes = () => {
    const ans = window.confirm(
      'Are you sure you want to remove all sticky notes?',
    )
    if (ans) {
      localStorage.removeItem('state')
      setState((prevState) => {
        return {
          ...prevState,
          stickynotes: [],
        }
      })
    }
  }

  const deleteNote = (e: any) => {
    let updatedStickyNotes: any = '',
      response = false

    if (!state.writable) {
      response = window.confirm('Do you want to delete this Sticky Note?')
    }
    if (response) {
      const tempState = { ...state }
      const stickynotes = tempState.stickynotes.filter((stickynote) => {
        return stickynote.id !== e.target.id
      })
      setState((prevState) => {
        return {
          ...prevState,
          stickynotes,
        }
      })
    }
  }

  const handleSwitch = (mode: string) => {
    let writable = false
    if (mode === 'd') {
      writable = false
    } else if (mode === 'e') {
      writable = true
    } else {
      writable = !state.writable
    }

    setState((prevState) => {
      return {
        ...prevState,
        writable,
      }
    })
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return (
    <>
      <About aboutHidden={true} />
      <div className={container}>
        <div className={buttons}>
          <button className={`${stickybtns} ${addnote}`} onClick={addNote}>
            Add Sticky Note
          </button>
          <div className={rwmode}>
            <span onClick={() => handleSwitch('d')} className={enableEditTxt}>
              Drag/Drop
            </span>
            <Switch
              checked={state.writable}
              onChange={() => handleSwitch('s')}
              color="default"
              inputProps={{ 'aria-label': 'controlled' }}
            />{' '}
            {
              <span
                onClick={() => handleSwitch('e')}
                className={disableEditTxt}
              >
                Edit Mode
              </span>
            }
            <div className={`${removenote}`} onClick={removestickynotes}>
              Remove All Sticky Notes
            </div>
          </div>
        </div>

        <div className={grid}>
          {state.stickynotes.map(
            ({ id, notes, color, tiltdeg }: StickyNote) => {
              const tiltangle = `rotate(${tiltdeg}deg)`
              return (
                <Fragment key={id}>
                  <div
                    draggable={!state.writable}
                    onDragStart={(e) => handleDragStart(e, id)}
                    onDrop={(e) => handleDrop(e, id)}
                    onDoubleClick={deleteNote}
                    onDragOver={(e) => e.preventDefault()}
                    id={id}
                    style={{
                      transform: tiltangle,
                      backgroundColor: `#${color}`,
                    }}
                    onFocus={() => (state.editmode = true)}
                    onBlur={saveNote}
                    contentEditable={state.writable}
                    onKeyDown={handleKeyDown}
                    suppressContentEditableWarning={true}
                    className={stickynote}
                  >
                    {notes}
                  </div>
                </Fragment>
              )
            },
          )}
        </div>
      </div>
    </>
  )
}

const {
  stickynote,
  grid,
  container,
  stickybtns,
  addnote,
  removenote,
  buttons,
  disableEditTxt,
  enableEditTxt,
  rwmode,
} = styles
