import "./styles.css";
import React, { useState, useEffect, Fragment, useRef } from "react";

export default function App() {
  const [state, setState] = useState({
    usersList: [],
    filteredUsersList: [],
    filtered: false
  });

  const fetchData = async () => {
    try {
      const header = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersList = await header.json();
      if (!header.ok) {
        console.log("Source Not Found  ", header.status);
        return;
      }
      setState((prevState) => {
        return {
          ...prevState,
          usersList
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //dev only
  useEffect(() => {
    console.log("State ", state);
  });

  const deleteRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempState = { ...state };
    const tempUsersList = tempState.usersList;

    const usersList = tempUsersList.filter(({ id }) => {
      return id !== parseInt(e.target.id);
    });

    setState((prevState) => {
      return {
        ...prevState,
        usersList
      };
    });
  };
  const userInputTxt = useRef(null);

  const search = () => {
    const tempState = { ...state };

    const userInput = userInputTxt?.current?.value;
    let usersList: { id: number; name: string; email: string }[];
    if (userInput.length > 0) {
      usersList = [
        ...tempState.usersList.filter(
          ({ name, email }: { name: string; email: string }) => {
            return (
              name.includes(userInput.current.value) ||
              email.includes(userInput.current.value)
            );
          }
        )
      ];
    } else {
      usersList = state.usersList;
    }
    tempState.filtered = true;
    setState((prevState) => {
      return {
        ...prevState,
        filtered: true,
        filteredUsersList: usersList
      };
    });
  };

  return (
    <div className="App">
      <label>Search</label>
      <input onChange={search} type="text" ref={userInputTxt} />
      <button onClick={search}>Search</button>
      <div className="grid">
        <div>Id</div>
        <div>Name</div>
        <div>E-Mail</div>
        <div>Action</div>
        {state[state.filtered ? "filteredUsersList" : "usersList"]?.map(
          ({ id, name, email }) => {
            return (
              <Fragment key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{email}</div>
                <div id={id} onClick={deleteRow}>
                  X
                </div>
              </Fragment>
            );
          }
        )}
      </div>
    </div>
  );
}
