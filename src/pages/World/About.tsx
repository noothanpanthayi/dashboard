import { useState } from 'react'
import styles from './about.module.css'

const { aboutContainer, aboutHeader, arrow, codeLink, aboutContent } = styles

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
          <span className={aboutHeader}> About World Info App</span>
        </div>
        {!state.aboutHidden && (
          <div className={aboutContent}>
            <p>
              <strong>
                This web-based app is developed in{' '}
                <span style={{ color: 'blue' }}>ReactJs</span> using {' '}
                <span>TypeScript</span>.
              </strong>
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
                  (b) Debounce concept is incorporated into a React custom hook,
                  to prevent making api request on each letter typed by the user
                </li>
                <li>(e) CSS Module is used for styling the application</li>
                <li>
                  (f) CSS flex is used to style the card make it
                  responsive across devices
                </li>
              </ul>
              <p>
                Source code of this app can be viewed at the following Github
                location:
                <br />
                <a
                  title="Opens in another tab of this browser"
                  className={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/noothanpanthayi/dashboard/tree/master/src/pages/World"
                >
                  View Source Code
                </a>
                <span
                  title="Opens in another tab of this browser"
                  style={{ color: 'green' }}
                >
                  ◥
                </span>
              </p>
          </div>
        )}
      </div>
    </>
  )
}

export default About
