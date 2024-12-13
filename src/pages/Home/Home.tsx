import React, { Fragment, useContext } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { ScreenMode } from "../../App";

const Home = () => {
  const navigate = useNavigate();
  const screenModeContext: any = useContext(ScreenMode);

  const toggleScreenMode = () => {
    document.body.style.backgroundColor = "green";
    console.log(document.body.style.backgroundColor);

    screenModeContext.setState((prevState: { screenmode: string }) => {
      return {
        ...prevState,
        screenmode: prevState.screenmode === "dark" ? "light" : "dark",
      };
    });
  };

  const apps = [
    {
      title: "Sticky Notes",
      url: "/stickynotes",
      description: (
        <Fragment>
          <p>
            This React application mimics the{" "}
            <span>classic Sticky Note experience</span>. Users can freely create
            a sticky note and enter any text. It can be easily edited and
            deleted.
          </p>
          <p>
            <span>
              It is automatically saved when the user clicks outside the sticky
              note.
            </span>
          </p>
          <p>
            <span>
              When the page is refreshed, the saved notes are retrieved
            </span>
          </p>
        </Fragment>
      ),
    },

    {
      title: "Online Shopping",
      url: "/shopping",
      description: (
        <Fragment>
          <p>
            This is to demo an <span>Online Shopping</span> feature.
          </p>
          <p>
            It fetches a free-to-use products <span>API data</span> from a{" "}
            <span>remote server</span> using <br />
            <span>React Tookit and RTK Query</span>.
          </p>
          <p>
            <span>RTK CreateSlice</span> is used to manage the state of the
            shopping cart.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Managing Large Data Sets",
      url: "/lgdatatable",
      description: (
        <Fragment>
          <p>
            Using Virtualized Table, React app efficiently handles large data
            sets of data
          </p>

          <p>
            This ReactJS table is handling <span>100,000</span> rows with smooth
            scrolling by using the virtualization feature
          </p>
        </Fragment>
      ),
    },
    {
      title: "SSR with NextJs & PostGreSQL on AWS",
      url: "/ssr",
      description: (
        <Fragment>
          <p>
            This <span>Next.js</span> application hosted on <span>AWS Cloud</span>, utilizes the{" "}
            <span>App Router feature</span>. It sends an HTTP request to it's
            backend server. The server queries the <span>PostgreSQL</span>{" "}
            database to retrieve the product list, renders it server-side, and
            sends it to the client.
          </p>
          <p>
            Upon reaching the client, the data is hydrated, and the 'Add to
            Cart' button becomes active
          </p>
        </Fragment>
      ),
    },
    {
      title: "Custom Grid",
      url: "/grid",
      description: (
        <Fragment>
          <p>
            Grid is used to display the data in tabular format which has rows
            and columns.
          </p>
          <p>
            Users can edit the field like an <span>Excel Sheet</span> by
            directly clicking on the cell. This also has Add and Sort feature.
          </p>
          <p>
            <span>CSS Grid</span> is used to display the grid layout
          </p>
        </Fragment>
      ),
    },

   
 
    {
      title: "MERN Application on Vercel",
      url: "/mern",
      description: (
        <Fragment>
          <p>
            This is a <span>Node.js</span>, <span>Express</span>,{" "}
            <span>MongoDB</span>, <span>ReactJs</span>
            &nbsp;application hosted on <span>Vercel Cloud Platform </span>.
          </p>
          <p>
            This application uses React on the front end and built using Node.js
            and Express on the server-side logic. Data is managed and stored in
            a MongoDB database.
          </p>
        </Fragment>
      ),
    },
   
    {
      title: "Tic-Tac-Toe",
      url: "/tictactoe",
      description: (
        <Fragment>
          <p>
            The Tic-Tac-Toe game is a classic, <br />
            <span>two-player game</span> where users take turns marking spaces
            on a 3x3 grid.
          </p>
          <p>
            Players can choose to play as X or O, with the goal of getting three
            in a row <span>horizontally</span>,<span> vertically</span>, or{" "}
            <span>diagonally</span>.
          </p>
          <p>
            <span>
              The game automatically detects wins and draws, and allows players
              to restart at any time.
            </span>
          </p>
        </Fragment>
      ),
    },
   
  

 
    {
      title: "World Info",
      url: "/world",

      description: (
        <Fragment>
          <p>
            This is to demo a <span>Search feature</span> which fetches the
            details of a user typed country from a free-to-use API.
          </p>
          <p>
            {" "}
            <span>Debounce feature</span> is incorporated to improve the
            performance of the search.
          </p>
        </Fragment>
      ),
    },
    
    {
      title: "Dice Roller App",
      url: "/diceroller",

      description: (
        <Fragment>
          <p>
            This <span></span>React app simulates a two-dice roll. Each time you
            click the button, it generates random numbers for both dice and
            displays the corresponding dice faces.
          </p>
          <p>
            It counts each dice roll and tracks the total until both dice show 6
            simultaneously or max attempts reaches 20.
          </p>
          {/* <p>
            The app features a mix of animated and static dice images, creating
            a dynamic and engaging experience.
          </p> */}
        </Fragment>
      ),
    },

    {
      title: "To Do",
      url: "/todo",
      description: (
        <Fragment>
          <p>To Do app is used to maintain our day-to-day tasks.</p>
          <p>
            User can type a task and it will be listed under{" "}
            <span>Active Todo</span> category.
          </p>
          <p>
            Once the task is completed, user can click on the checkbox. The
            completed Todo task will be moved to the <span>Completed Todo</span>{" "}
            category.
          </p>
          .
        </Fragment>
      ),
    },

    {
      title: "Article in Medium",
      url: "https://medium.com/@noothankrishnan_88771/reactjs-patterns-for-delightful-dx-68a7ec795b70",
      description: (
        <Fragment>
          <p>
            <span>ReactJs Patterns for Delightful DX</span>
          </p>
          <p>
            This is an article in <span>Medium</span> which helps to write{" "}
            <span>consistent, readable and maintainable ReactJs code</span> to
            provide a delightful developer experience.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Form Handling",
      url: "/formhandling",
      description: (
        <Fragment>
          <p>This is to demo the form handling feature in ReactJs.</p>
          <p>
            It manages
            <span>
              Textboxes, Radio Buttons, Checkboxes, Drop Down List, Textarea
            </span>{" "}
            and validates when user submit the form.
          </p>
        </Fragment>
      ),
    },
  ];

  const doNavigate = (url: any) => {
    if (url.includes("http")) {
      window.open(url);
    } else {
      navigate(url);
    }
  };

  return (
    <Fragment>
      <div className={pageHeader}>ReactJs Applications</div>
      <div className={hiLites}>
        <div className={hlTitle}>Tech Stacks and features used to develop these Apps</div>
        <div className={hlGrid}>
          <ul>
            <li>ReactJs Library</li>
            <li>Redux/RTK Query</li>
            <li>Redux Saga</li>
          </ul>
         
          <ul>
            <li>React Router</li>
            <li>Custom Hooks</li>
            <li>React Virtualization</li>
          </ul>
          <ul>
            <li>TypeScript</li>
            <li>ES6/JavaScript</li>
            <li>CSS Module</li>
          </ul>
          <ul>
            <li>React Testing Library</li>
            <li>Jest</li>
          <li>Mock Service Worker</li>

          </ul>
          <ul>
            <li>NextJs Framework</li>
            <li>AWS Cloud</li>
            <li>PostGreSQL</li>
          </ul>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
       
         
          {/* <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul> */}
          {/* <ul>
            <li>Git/Github</li>
            <li>ES6/JavaScript</li>
          </ul> */}
          {/* <ul>
            <li>Responsive Web</li>
            <li>ES6/JavaScript</li>
          </ul> */}
          {/* <ul>
            <li>Redux</li>
            <li>Redux Toolkit</li>
          </ul>
         
          <ul>
            <li>Virtualized Table</li>
            <li>RTK Query</li>
          </ul> */}
          {/* <ul>
            <li>NextJs</li>
            <li>ServerSide Rendering</li>
          </ul> */}
          {/* <ul>
            <li>CSS Module</li>
            <li>NextJs </li>
          </ul>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
          </ul>
          <ul>
            <li>PostGreSQL</li>
            <li>Express</li>
          </ul> */}
        </div>
      </div>
      <div className={grid}>
        {apps.map((app, index) => {
          return (
            <Fragment key={index}>
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
          );
        })}
      </div>
    </Fragment>
  );
};

const {
  grid,
  title,
  content,
  card,
  header,
  externalLink,
  pageHeader,
  light,
  dark,
  hiLites,
  hlTitle,
  hlGrid,
} = styles;

export default Home;
