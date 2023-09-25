import  { useState, useEffect } from 'react'
import styles from './formhandling.module.css'

function FormHandling() {
  const [state, setState] = useState({
    userData: {
      name: {
        hasError: false,
        errorMsg: '',
        value: '',
      },
      age: {
        hasError: false,
        errorMsg: '',
        value: '',
      },
      food: {
        hasError: false,
        errorMsg: '',
        value: 'nonveg',
      },
      movie: {
        hasError: false,
        errorMsg: '',
        value: {
          action: false,
          horror: false,
          drama: false,
          thriller: false,
        },
      },
      source: {
        hasError: false,
        errorMsg: '',
        value: '',
      },
      comments: {
        hasError: false,
        errorMsg: '',
        value: '',
      },
    },
    formHasError: false,
  })

  const addToUserData = (e) => {
    const tempState = { ...state }

    const movieArr = ['action', 'horror', 'drama', 'thriller']
    if (movieArr.some((movie) => e.target.id === movie)) {
      tempState.userData['movie'].value[e.target.id] = !tempState.userData[
        'movie'
      ].value[e.target.id]
    } else {
      tempState.userData[e.target.id].value = e.target.value
    }

    setState((prevState) => {
      return {
        ...prevState,
        userData: tempState.userData,
      }
    })
  }

  useEffect(() => {
    return () => {
      const tempState = { ...state }
      for (let field in state.userData) {
        tempState.userData[field].errorMsg = ''
      }
    }
  })

  const doSubmit = (e) => {
    e.preventDefault()

    const tempState = { ...state }

    const regExpAlpha = /^[A-Za-z\s]+$/
    if (!regExpAlpha.test(tempState.userData.name.value.trim())) {
      tempState.userData.name.errorMsg = 'Empty/Invalid Name!'
      tempState.formHasError = true
    }

    const regExpNum = /^\d+$/
    if (!regExpNum.test(tempState.userData.age.value)||tempState.userData.age.value>120) {
      tempState.userData.age.errorMsg = 'Empty/Invalid Age!'
      tempState.formHasError = true
    }

    if (tempState.userData.source.value.length === 0) {
      tempState.userData.source.errorMsg = 'Source not selected!'
      tempState.formHasError = true
    }

    if (tempState.userData.comments.value.length === 0) {
      tempState.userData.comments.errorMsg = 'Comments Not Entered!'
      tempState.formHasError = true
    }

    setState((prevState) => {
      return {
        ...prevState,
        userData: tempState.userData,
      }
    })

    if (!tempState.formHasError) {
      alert('Form Successfully Submitted!')
    }
  }

  return (
    <div className={card}>
      <div className={title}>Create Your Account</div>
      <form>
        <ul>
          <li>
            <div>
              <label className={required}>Name</label>
            </div>
            <div>
              <input
                placeholder="Enter your name"
                onChange={addToUserData}
                id="name"
                type="text"
              />
            </div>
            {
              <div className={errorTxt}>
                {state.userData.name.errorMsg && state.userData.name.errorMsg}
                &nbsp;
              </div>
            }
          </li>
          <li>
            <div>
              <label className={required}>Age</label>
            </div>
            <div>
              <input
                placeholder="Enter your age"
                maxLength={3}
                onChange={addToUserData}
                id="age"
                type="text"
              />
            </div>
            {
              <div className={errorTxt}>
                {state.userData.age.errorMsg && state.userData.age.errorMsg}
                &nbsp;
              </div>
            }
          </li>
          <li>
            <div>
              <label>Food</label>
            </div>
            <div className={food}>
              <label htmlFor="veg">Veg</label>
              <input
                onChange={addToUserData}
                id="food"
                name="food"
                value="veg"
                checked={state.userData.food.value === 'veg'}
                type="radio"
              />
              <label htmlFor="nonveg">Non-Veg</label>
              <input
                onChange={addToUserData}
                id="food"
                name="food"
                value="nonveg"
                checked={state.userData.food.value === 'nonveg'}
                type="radio"
              />
            </div>
          </li>
          <li>
            <div>
              <label>Favorite Movie Genres</label>
            </div>
            <div className={movie}>
              <label htmlFor="action">Action</label>
              <input
                onChange={addToUserData}
                id="action"
                checked={state.userData.movie.value.action}
                type="checkbox"
              />
              <label htmlFor="horror">Horror</label>
              <input
                onChange={addToUserData}
                id="horror"
                checked={state.userData.movie.value.horror}
                type="checkbox"
              />
              <label htmlFor="drama">Drama</label>
              <input
                onChange={addToUserData}
                id="drama"
                checked={state.userData.movie.value.drama}
                type="checkbox"
              />
              <label htmlFor="thriller">Thriller</label>
              <input
                onChange={addToUserData}
                id="thriller"
                value={state.userData.movie.value.thriller}
                checked={state.userData.movie.value.thriller}
                type="checkbox"
              />
            </div>
          </li>
          <li>
            <div>
              <label className={required}>How did you hear about</label>
            </div>
            <div>
              <select id="source" onChange={addToUserData}>
                <option>Select Your Choice</option>
                <option value="internet">Internet</option>
                <option value="socialmedia">Social Media</option>
                <option value="television">Television</option>
                <option value="radio">Radio</option>
              </select>
            </div>
            {
              <div className={errorTxt}>
                {state.userData.source.errorMsg &&
                  state.userData.source.errorMsg}
                &nbsp;
              </div>
            }
          </li>
          <li>
            <div>
              <label className={required}>Comments</label>
            </div>
            <div>
              <textarea
                placeholder="Enter Comments"
                onChange={addToUserData}
                id="comments"
              ></textarea>
              {
                <div className={errorTxt}>
                  {state.userData.comments.errorMsg &&
                    state.userData.comments.errorMsg}
                  &nbsp;
                </div>
              }
            </div>

            <div className={buttonContainer}>
              <button onClick={doSubmit}>Submit</button>
            </div>
          </li>
        </ul>
      </form>
      {/* <div>
        <pre>{JSON.stringify(state, null, 3)}</pre>
      </div> */}
    </div>
  )
}

const { card, title, movie, food, buttonContainer, errorTxt, required } = styles

export default FormHandling
