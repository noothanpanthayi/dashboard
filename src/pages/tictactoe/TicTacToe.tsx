import React, { useState, useEffect, Fragment } from 'react'
import styles from './tictactoe.module.css'

function TicTacToe() {
  const [state, setState] = useState({
    tttCells: new Array(9).fill(''),
    lastSymbol: 'O',
    gameResult: '',
    playersTurn: 'Player 1',
    gameEnd: true,
  })

  function updateCell(e: any) {
    if (state.gameEnd) return
    const iswon = false
    const tempState = { ...state }
    const nextSymbol = state.lastSymbol === 'X' ? 'O' : 'X'
    if (!tempState.tttCells[parseInt(e.target.id)])
      tempState.tttCells[parseInt(e.target.id)] = nextSymbol
    const row1 = [
      ...state.tttCells[0],
      ...state.tttCells[1],
      ...state.tttCells[2],
    ].join('')

    const row2 = [
      ...state.tttCells[3],
      ...state.tttCells[4],
      ...state.tttCells[5],
    ].join('')

    const row3 = [
      ...state.tttCells[6],
      ...state.tttCells[7],
      ...state.tttCells[8],
    ].join('')

    const col1 = [
      ...state.tttCells[0],
      ...state.tttCells[3],
      ...state.tttCells[6],
    ].join('')

    const col2 = [
      ...state.tttCells[1],
      ...state.tttCells[4],
      ...state.tttCells[7],
    ].join('')
    const col3 = [
      ...state.tttCells[2],
      ...state.tttCells[5],
      ...state.tttCells[8],
    ].join('')

    const diag1 = [
      ...state.tttCells[0],
      ...state.tttCells[4],
      ...state.tttCells[8],
    ].join('')
    const diag2 = [
      ...state.tttCells[2],
      ...state.tttCells[4],
      ...state.tttCells[6],
    ].join('')

    if (
      row1 === 'XXX' ||
      row1 === 'OOO' ||
      row2 === 'XXX' ||
      row2 === 'OOO' ||
      row3 === 'XXX' ||
      row3 === 'OOO' ||
      col1 === 'XXX' ||
      col1 === 'OOO' ||
      col2 === 'XXX' ||
      col2 === 'OOO' ||
      col3 === 'XXX' ||
      col3 === 'OOO' ||
      diag1 === 'XXX' ||
      diag1 === 'OOO' ||
      diag2 === 'XXX' ||
      diag2 === 'OOO'
    ) {
      tempState.gameResult = `Congratulations, ${tempState.playersTurn} has Won!`
      tempState.gameEnd = true
    }

    if (tempState.gameEnd) {
      tempState.playersTurn = ''
    } else {
      tempState.playersTurn =
        tempState.playersTurn === 'Player 1' ? 'Player 2' : 'Player 1'
    }

    setState((prevState) => {
      return {
        ...prevState,
        lastSymbol: nextSymbol,
        tttCells: [...tempState.tttCells],
        gameResult: tempState.gameResult,
        playersTurn: tempState.playersTurn,
        gameEnd: tempState.gameEnd,
      }
    })
  }

  function endGame() {
    setState((prevState) => {
      return {
        ...prevState,
        tttCells: new Array(9).fill(''),
        gameEnd: true,
        playersTurn: 'Player 1',
      }
    })
  }

  function startGame() {
    setState((prevState) => {
      return {
        ...prevState,
        tttCells: new Array(9).fill(''),
        gameEnd: false,
        playersTurn: 'Player 1',
        gameResult: '',
      }
    })
  }

  return (
    <>
      <main>
        <div className={container}>
          {state.tttCells.map((item, index) => {
            return (
              <Fragment key={index}>
                <div onClick={updateCell} id={index.toString()}>
                  {item}
                </div>
              </Fragment>
            )
          })}
        </div>
        {state.gameEnd === false && (
          <div className={`${turn} ${blink}`}>{state.playersTurn}'s turn</div>
        )}
        {state.gameResult && (
          <div className={gameResult}>
            <span className={resultLabel}>Result:</span>
            {!state.gameResult ? 'Game in Progress' : state.gameResult}
          </div>
        )}
        {state.gameEnd === true && (
          <div className={btnCenter}>
            <button onClick={startGame} className={button}>
              Start/ReStart Game
            </button>
          </div>
        )}
        {state.gameEnd === false && (
          <div className={btnCenter}>
            <button onClick={endGame} className={button}>
              Stop Game
            </button>
          </div>
        )}

        {/* {
        state.gameEnd && <div className={btnCenter}><button onClick={endGame} className={button}>Restart Game</button></div>
      } */}
      </main>
    </>
  )
}

const {
  container,
  gameResult,
  resultLabel,
  turn,
  blink,
  button,
  btnCenter,
} = styles

export default TicTacToe
