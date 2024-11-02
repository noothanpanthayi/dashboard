import { useState, useEffect } from 'react';
import styles from './diceroller.module.css';
import diceRolling from '../../assets/images/dicerolling.gif';

import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png'

const DiceRoller = () => {

    const [state, setState] = useState({
        dice1: [dice1, dice2, dice3, dice4, dice5, dice6],
        dice2: [dice1, dice2, dice3, dice4, dice5, dice6],
        activeIndex1: 1,
        activeIndex2: 2,
        rolling: false,
        rolledTimes:0,
        btnDisabled:false,
        gameOver:false
      });
    
      const genRandomNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const rollDice = () => {
        let rolledTimes:number;
        let gameOver:boolean;
      
        setState((prevState: any) => {
          
          if (prevState.rolledTimes>=20){
            alert("Max Times 20 Completed, Game Over!")
            gameOver=false;
            rolledTimes=-1;
          }
          else
          if (state.activeIndex1+state.activeIndex2===10){
            rolledTimes=0;
            gameOver=true
          }
          else {
            rolledTimes=prevState.rolledTimes
          }
          return {
            ...prevState,
            rolling: true,
            rolledTimes,
            btnDisabled:true,
            gameOver:true
          };
        });

        setTimeout(() => {
          let activeIndex1 = genRandomNum(0, 5);
          let activeIndex2=genRandomNum(0,5);
    
          setState((prevState: any) => {
          
            return {
              ...prevState,
              activeIndex1,
              activeIndex2,
              rolling: false,
              btnDisabled:false,
              rolledTimes:prevState.rolledTimes + 1
            };
          });
        }, 1000);
      };
  
    
  const src1 = state.dice1[state.activeIndex1];
  const src2 = state.dice2[state.activeIndex2];


  return <>
    <div className={container}>



        <div className={rolled}>Dice Rolled&nbsp;{state.rolledTimes}
        &nbsp;Times to Attain a Total of&nbsp;12</div>
        <div  role="alert" className={congrats}>

        {(state.activeIndex1+state.activeIndex2) === 10 && !state.rolling 
        && (    <div>Congratulations!</div>
        )
        }
        

          </div>
      
      {state.rolling ? <>
        <div className={dicearea}>
        <div>
          <img alt="dicerolling" width="100" src={diceRolling} />
        </div>
        <div>
          <img alt="dicerolling" width="100" src={diceRolling} />
        </div>
        </div>
         
         </> : (
        <>
          <div className={dicearea}>
            <div>
            <img src={src1} width="70" alt="diceresult" />
            </div>
            <div>
            <img src={src2} width="70" alt="diceresult" />
            </div>
          </div>
         
        </>
      )}
      <div className={dicearea}>
        <button disabled={state.btnDisabled} className={button} onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
    </>
}

const {container, button, dicearea, congrats, rolled, total, max}=styles;

export default DiceRoller