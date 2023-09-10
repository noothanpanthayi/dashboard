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
          <span className={aboutHeader}>World Info App</span>
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
              This is to demo a search feature to fetch a user typed country info from a free-to-use API.
              <br/> Debounce concept is incorporated to improve the performance of the search.

            </p>
            <p>
              The following ReactJs features are used to develop this app:
            </p>
              <ul>
                <li>
                  (a) Native fetch is used to fetch a free-to-use api from a
                  remote server
                </li>
                <li>
                  (b) Debounce feature is encapsulated into a React custom hook,
                  to prevent making api request on each letter typed by the user
                </li>
                <li>(e) CSS Module is used for styling the application</li>
                <li>
                  (f) CSS flex is used to style the card and make it
                  responsive across devices
                </li>
              </ul>
             
          </div>
        )}
      </div>
    </>
  )
}

export default About
