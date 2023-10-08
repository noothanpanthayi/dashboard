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
    ].join('');

    const xoro=['XXX','OOO'];

    if (xoro.includes(row1) || xoro.includes(row2)||xoro.includes(row3)||
    xoro.includes(col1) || xoro.includes(col2)|| xoro.includes(col3) ||
    xoro.includes(diag1) || xoro.includes(diag2))
    {
      tempState.gameResult = `Congratulations, ${tempState.playersTurn} has Won!`
      tempState.gameEnd = true
    } else if (state.tttCells.join('').length===9){
      tempState.gameResult = `Game ended in a draw`
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
        lastSymbol:'O',
        gameEnd: false,
        playersTurn: 'Player 1',
        gameResult: '',
      }
    })
  }

  // useEffect(()=>{
  //    return ()=>
  //    {
  //     setState((prevState)=>{
  //       return {
  //         ...prevState,
  //         lastSymbol:'X'
  //       }
  //     })
  //    }
  // })
  return (
    <>
      <main>
        <div className={container}>
          {state.tttCells.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className={`${item==='X'?xColor:item==='O'?oColor:''}`} onClick={updateCell} id={index.toString()}>
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
  oColor,
  xColor
} = styles

export default TicTacToe
