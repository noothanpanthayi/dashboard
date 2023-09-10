import { useState } from 'react'
import styles from './about.module.css'

const { aboutContainer, aboutHeader, arrow, aboutContent, blue } = styles

function About() {
  const [state, setState] = useState({
    aboutHidden: true,
  })

  function toggleContent() {
    setState((prevState) => {
      return {
        aboutHidden: !prevState.aboutHidden,
      }
    })
  }

  return (
    <>
      <div className={aboutContainer}>
        <div onClick={toggleContent}>
          {state.aboutHidden && <span className={arrow}>▶</span>}
          {!state.aboutHidden && <span className={arrow}>▼</span>}
          <span className={aboutHeader}>Custom Grid App</span>
        </div>
        {!state.aboutHidden && (
          <div className={aboutContent}>
            <p>
           
             This web-based app is developed in{' '}
                <span className={blue}>ReactJs</span> with TypeScript and <span className={blue}>CSS Grid.</span>
            </p>
            <p>
          Users can edit the field by directly clicking on the required cell.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default About
