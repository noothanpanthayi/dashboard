import {useState} from 'react';
import styles from './about.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const {
    aboutContainer,
    aboutHeader,
    arrow,
    codeLink,
    aboutContent,
    red
  } = styles

function About() {

    const [state, setState] = useState({
        aboutHidden: true,
      })

        const navigate=useNavigate();
  const {cartlist}:any=useSelector<any>(state=>state.cartlist);


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
            {
              state.aboutHidden && <span className={arrow}>▶</span>
  }
   {
              !state.aboutHidden && <span className={arrow}>▼</span>
  }
            <span>
             <span className={aboutHeader}> Shopping App </span> <span onClick={()=>navigate('/cart')} className={red}>Cart <span>({cartlist.length})</span>
            </span>
            </span>
          </div>
          {!state.aboutHidden && (
            <div className={aboutContent}>
              <p>
                <strong>
                  This web-based app is developed in {' '}
                  <span style={{ color: 'blue' }}>ReactJs</span>  with TypeScript.
                </strong>
              </p>
              <p>This is to demo an online shopping feature. It fetches a free-to-use products API data
                from a remote server using React Toolkit Query. React CreateSlice is used to manage the state of the 
                shopping cart. When the user selects an item by clicking on Add to Cart, it navigates to the Cart page. User can then 
                click on Continue Shopping button and navigate back to the shopping page. The number of items selected
                will be showed in the Cart link on the top right of the navigation bar. 
                When clicked on the Cart link, it navigates to the Cart page and shows the list of the user selected items.
                User has the provision to delete any unwanted item in the cart.
              </p>
              <p>
                The following ReactJs features are used to develop this app:
              </p>
                <ul>
                  <li>
                    (a) React Router is used to navigate across the application
                  </li>
                  <li>
                    (b) Redux Toolkit is used to maintain state across the
                    application
                  </li>
                  <li>
                    (c) RTK Query is used to fetch the API data from a
                    remote server
                  </li>
                  <li>
                    (d) Custom Hook is used to encapsulate all business logic and API calls
                  </li>
                  <li>(e) CSS Module is used for styling the application</li>
                  <li>
                    (f) CSS flex is used to make card responsive across devices
                  </li>
                </ul>
            </div>
          )}
        </div>
      </>
    )
  }

  export default About