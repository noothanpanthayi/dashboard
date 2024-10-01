import React, { Fragment, useContext } from 'react'
import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'
import { ScreenMode } from '../../App';

const Home = () => {
  const navigate = useNavigate();
  const screenModeContext:any=useContext(ScreenMode);

  const toggleScreenMode=()=>{
    document.body.style.backgroundColor='green';
    console.log(document.body.style.backgroundColor)

    screenModeContext.setState((prevState:{screenmode:string})=>{
      return {
        ...prevState,
        screenmode:prevState.screenmode==='dark'?'light':'dark'
      }
    })
    
  }

  const apps = [
    {
      title: 'Tic Tac Toe',
      url: '/tictactoe',
      description: (
        <Fragment>
          <p>
          The Tic-Tac-Toe game is a classic, two-player game where users take turns marking spaces on a 3x3 grid. 
          </p>
          <p>
          Players can choose to play as X or O, with the goal of getting three in a row horizontally, vertically, or diagonally. 
          </p>
          <p>
          The game automatically detects wins and draws, and allows players to restart at any time.
          </p>
         
        </Fragment>
      ),
    },
    {
      title: 'Custom Grid',
      url: '/grid',
      description: (
        <Fragment>
          <p>
            Grid is used to display the data in tabular format which has rows
            and columns.
          </p>
          <p>
            Users can edit the field by directly clicking on the cell. This also
            has Add and Sort feature.
          </p>
          <p>CSS Grid is used to display the grid layout</p>
        </Fragment>
      ),
    },
    {
      title: 'Article in Medium',
      url: 'https://medium.com/@noothankrishnan_88771/reactjs-patterns-for-delightful-dx-68a7ec795b70',
      description: (
        <Fragment>
          <p>
          ReactJs Patterns for Delightful DX
          </p>
          <p>
           This is an article in Medium which helps to write consistent, readable and maintainable ReactJs Code to provide a delightful developer experience.
          </p>
        
        </Fragment>
      ),
    },
    {
      title: 'Online Shopping',
      url: '/shopping',
      description: (
        <Fragment>
          <p>
            This is to demo an online shopping feature. It fetches a free-to-use
            products API data from a remote server using React Toolkit Query.
          </p>
          <p>
            React CreateSlice is used to manage the state of the shopping cart.
          </p>
        </Fragment>
      ),
    },
    {
      title: 'World Info',
      url: '/world',

      description: (
        <Fragment>
          <p>
            This is to demo a search feature which fetches the details of a user
            typed country from a free-to-use API.
          </p>
          <p>
            {' '}
            Debounce concept is incorporated to improve the performance of the
            search.
          </p>
        </Fragment>
      ),
    },
   
    {
      title: 'To Do',
      url: '/todo',
      description: (
        <Fragment>
          <p>
            To Do app is used to maintain our day-to-day tasks. 
            </p>
            <p>
             User can type a
            task/reminder and it will be listed under Active Todo category. Once
            the task is completed, user can click on the checkbox. The completed
            Todo task will be moved to the Completed Todo category.
            </p>
         
          .
        </Fragment>
      ),
    },
    {
      title: 'Form Handling',
      url: '/formhandling',
      description: (
        <Fragment>
          <p>
          This is to demo the form handling feature in ReactJs.
          </p>
          <p>
          It manages
          textboxes, radio buttons, checkboxes, drop down list, textarea and
          validates when user submit the form.
          </p>
        </Fragment>
      ),
    },
 
  ]

  const doNavigate = (url: any) => {
    if (url.includes('http')){
      window.open('https://medium.com/@noothankrishnan_88771/reactjs-patterns-for-delightful-dx-68a7ec795b70')
    }
    else {
      navigate(url)
    }
  }

  return <Fragment>
<div className={pageHeader}>ReactJs Applications</div>
      <div className={grid}>
        {apps.map((app, index) => {
          return <Fragment key={index}>
            <>
              <div
                title={`Navigate to ${app.title} page`}
                onClick={() => doNavigate(app.url)}
                className={card}
              >
                <div className={title}>{app.title}</div>
                <div>
                  <div className={content}>{app.description}</div>
                </div>
              </div>
            </>
            </Fragment>
        })}
      </div>
      </Fragment>
}

const { grid, title, content, card, header, externalLink, pageHeader, light, dark } = styles

export default Home
