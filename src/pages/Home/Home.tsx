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
      title: 'Tic-Tac-Toe',
      url: '/tictactoe',
      description: (
        <Fragment>
          <p>
          The Tic-Tac-Toe game is a classic, <br/><span>two-player game</span> where users take turns marking spaces on a 3x3 grid. 
          </p>
          <p>
          Players can choose to play as X or O, with the goal of getting three in a row <span>horizontally</span>, 
          <span> vertically</span>, or <span>diagonally</span>. 
          </p>
          <p>
          <span>The game automatically detects wins and draws, and allows players to restart at any time.
          </span>
          </p>
         
        </Fragment>
      ),
    },
    {
      title: 'Stick Notes',
      url: '/stickynotes',
      description: (
        <Fragment>
          <p>
          This React application mimics the <span>classic Sticky Note experience</span>. 
          Users can freely create a sticky note and enter any text. It can be easily edited and deleted.
          </p>
          <p>
          <span>It is automatically saved when the user clicks outside the sticky note. 
         
          </span>
         
          </p>
          <p>
             <span>When the page is refreshed, the saved notes are retrieved</span>
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
            This is to demo an <span>Online Shopping</span> feature. 
          </p>
          <p>
            It fetches a free-to-use
            products <span>API data</span> from a <span>remote server</span> using <br/><span>React Tookit and RTK Query 
            </span>.
          </p>
          <p>
            <span>RTK CreateSlice</span> is used to manage the state of the shopping cart.
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
            Users can edit the field like an <span>Excel Sheet</span> by directly clicking on the cell. This also
            has Add and Sort feature.
          </p>
          <p><span>CSS Grid</span> is used to display the grid layout</p>
        </Fragment>
      ),
    },
    
   
   
    {
      title: 'World Info',
      url: '/world',

      description: (
        <Fragment>
          <p>
            This is to demo a <span>Search feature</span> which fetches the details of a user
            typed country from a free-to-use API.
          </p>
          <p>
            {' '}
            <span>Debounce feature</span> is incorporated to improve the performance of the
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
            task and it will be listed under <span>Active Todo</span> category. 
            </p>
            <p>Once the task is completed, user can click on the checkbox. The completed
            Todo task will be moved to the <span>Completed Todo</span> category.
            </p>
         
          .
        </Fragment>
      ),
    },
    {
      title: 'Article in Medium',
      url: 'https://medium.com/@noothankrishnan_88771/reactjs-patterns-for-delightful-dx-68a7ec795b70',
      description: (
        <Fragment>
          <p>
          <span>ReactJs Patterns for Delightful DX</span>
          </p>
          <p>
           This is an article in <span>Medium</span> which helps 
            to write <span>consistent, readable and maintainable ReactJs code</span> to provide a delightful developer experience.
          </p>
        
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
          <span>Textboxes, Radio Buttons, Checkboxes, Drop Down List, Textarea</span> and
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
