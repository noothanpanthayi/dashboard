import { Fragment, useState, useEffect } from 'react'
// import styles from './TrafficLight.module.css'
import './TrafficLight.css'


const TrafficLight = () => {
  const [state, setState] = useState(
    { 
      lights:[
        {
          color: 'red',
          timing: 5000,
        },
        {
          color: 'yellow',
          timing: 2000,
        },
        {
          color: 'green',
          timing: 4000,
        }
      ],

      activeLight:{
            color: 'red',
            timing: 0,
      },
      activeColorNum:0
    }
  )

  const nextLight = () => {
      setState((prevState:any) => {
        let activeLight={
          color:prevState.lights[prevState.activeColorNum].color,
          timing:prevState.lights[prevState.activeColorNum].timing
        }
        return {
          ...prevState,
         activeLight,
         activeColorNum:prevState.activeColorNum==2?0:prevState.activeColorNum+1
        }
      })
  }

  useEffect(() => {
   const timerHandler= setTimeout(()=>{
      nextLight()
    },state.activeLight.timing)
  
    return()=>{
       clearTimeout(timerHandler)
    }
  }, [state.activeColorNum])


  return (
    <Fragment>
      <h1 style={{ marginTop: 50 }}>Traffic light</h1>
      <div className="container">
        <div className={`light  ${state.activeLight.color==='red'?'red':''}`}>
          &nbsp;
        </div>
        <div className={`light  ${state.activeLight.color==='yellow'?'yellow':''}`}>
          &nbsp;
          &nbsp;
        </div>
        <div className={`light  ${state.activeLight.color==='green'?'green':''}`}>
          &nbsp;
          &nbsp;
        </div>
      </div>
    </Fragment>
  )
}

export default TrafficLight;