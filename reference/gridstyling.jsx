import React, { useState, useEffect, useRef, Fragment } from "react";
import "./styles.css";
//api endpoint for Pokemon https://pokeapi.co/api/v2/pokemon

export default function App() {
  const [state, setState] = useState({
    pokemonList: []
  });

  const doFetch = async () => {
    const header = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!header.ok) {
      throw new Error("Source not found!");
    }
    const response = await header.json();
    console.log(response);

    setState((prevState) => {
      return {
        ...prevState,
        pokemonList: response.results
      };
    });
  };

  useEffect(() => {
    doFetch();
  }, []);

  const Dodelete = (index) => {
    const tempState = { ...state };
    const pokemonList = tempState.pokemonList;

    pokemonList.splice(index, 1);

    setState((prevState) => {
      return {
        ...prevState,
        pokemonList
      };
    });
  };

  const addRecord = () => {
    const tempState = { state };
    const pokemonList = tempState.pokemonList;
    console.log(inputTxt.current.value);
    const pokemonObj = {
      name: inputTxt.current.value,
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    };

    console.log(pokemonList);

    setState((prevState) => {
      return {
        ...prevState,
        pokemonList: [...prevState.pokemonList, pokemonObj]
      };
    });
  };

  const inputTxt = useRef();

  return (
    <div className="App">
      <h1>Hello Poké trainer!</h1>
      <h2>Lets start by calling an api to view your pokémon!</h2>
      <input ref={inputTxt} type="text" />
      <button onClick={addRecord}>Add</button>
      <div class="grid">
        <div class="bold">Name</div>
        <div class="bold">Action</div>

        {state.pokemonList?.map((pokemon, index) => {
          return (
            <Fragment key={index}>
              <div>{pokemon.name}</div>
              <div>
                <button className="button" onClick={() => Dodelete(index)}>
                  Delete
                </button>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
