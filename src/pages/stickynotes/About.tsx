import { useState } from 'react'
import styles from './about.module.css'

const { aboutContainer, aboutHeader, arrow, aboutContent } = styles

function About({aboutHidden}:{aboutHidden:boolean}) {
  const [state, setState] = useState({
    aboutHidden
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
          <span className={aboutHeader}>Sticky Notes App Info</span>
        </div>
        {!state.aboutHidden && (
          <div className={aboutContent}>
            <p>
              <strong>
                This is a Sticky Notes app developed in{' '}
                <span style={{ color: 'blue' }}>ReactJs</span> with TypeScript.
              </strong>
            </p>
            <ul>
              <li><strong>Add a Sticky Note</strong>: Click on Add Sticky Note </li>
              <li><strong>Write a Note</strong>: Just click inside the sticky note and start writing</li>
              <li><strong>Save the Note</strong>: Just click outside the sticky note. Now navigate away or refresh the page</li>
              <li><strong>Delete a Note</strong>: Just double click on a sticky note and confirm</li>
              <li><strong>Remove all Sticky Notes:</strong>Click on the Remove all Sticky Notes link</li>
            </ul>
           
          </div>
        )}
      </div>
    </>
  )
}

export default About
