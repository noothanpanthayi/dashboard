import React, { useState, useEffect, Fragment } from 'react'
import styles from './tictactoe.module.css'

function TicTacToe() {
  const [state, setState] = useState({
    tttCells: new Array(9).fill(''),
    lastSymbol: '🦜',
    gameResult: '',
    playersTurn: 'Player 1',
    gameEnd: true,
  })

  function updateCell(e: any) {

    if (state.gameEnd && state.tttCells.join('').length===0){
      alert("Please click on the Start New Game Button")
    }

    if (state.gameEnd) return

    const iswon = false
    const tempState = { ...state }
    const nextSymbol = state.lastSymbol === '🦁' ? '🦜' : '🦁'
    if (!tempState.tttCells[parseInt(e.target.id)])
      tempState.tttCells[parseInt(e.target.id)] = nextSymbol;
    
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
    const xoro=['🦁🦁🦁','🦜🦜🦜'];
    if (xoro.includes(row1) || xoro.includes(row2)||xoro.includes(row3)||
    xoro.includes(col1) || xoro.includes(col2)|| xoro.includes(col3) ||
    xoro.includes(diag1) || xoro.includes(diag2))
    {
      tempState.gameResult = `Congratulations, ${tempState.playersTurn} has Won!`
      tempState.gameEnd = true
    } else if (state.tttCells.join('').length===18){
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
        lastSymbol:'🦜',
        gameEnd: false,
        playersTurn: 'Player 1',
        gameResult: '',
      }
    })
  }


  return (
    <>
      <main>
      <div className={title}>Tic-Tac-Toe</div>
        <div className={container}>
          {state.tttCells.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className={`${item==='🦁'?xColor:item==='🦜'?oColor:''}`} onClick={updateCell} id={index.toString()}>
                  {item}
                </div>
              </Fragment>
            )
          })}
        </div>
        {state.gameEnd === false && (
          <div className={`${turn} ${blink}`}>{state.playersTurn}'s turn - Please click inside a cell!</div>
        )}
        {state.gameResult && (
          <div className={gameResult}>
            {/* <span className={resultLabel}>Result:</span> */}
            {!state.gameResult ? 'Game in Progress' : state.gameResult}!
          </div>
        )}
        {state.gameEnd === true && (
          <div className={btnCenter}>
            <button onClick={startGame} className={tttButton}>
              Start New Game
            </button>
          </div>
        )}
        {state.gameEnd === false && (
          <div className={btnCenter}>
            <button onClick={endGame} className={tttButton}>
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
  title,
  turn,
  blink,
  tttButton,
  btnCenter,
  oColor,
  xColor
} = styles

export default TicTacToe
