import { useState } from 'react'
import styles from './about.module.css'

const { aboutContainer, aboutHeader, arrow, aboutContent } = styles

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
          <span className={aboutHeader}>ToDo App</span>
        </div>
        {!state.aboutHidden && (
          <div className={aboutContent}>
            <p>
              <strong>
                This web-based app is developed in{' '}
                <span style={{ color: 'blue' }}>ReactJs</span> with TypeScript.
              </strong>
            </p>
            <p>
              This is a ToDo App. User can type a task/reminder and it will be listed under Active Todo category.
              Once the task is completed, user can click on the checkbox. The completed Todo task
              will be listed under the Completed Todo category. This is to demo the state and event 
              management features like Checkbox handling and ES6 features of ReactJs
            </p>
           
          </div>
        )}
      </div>
    </>
  )
}

export default About
