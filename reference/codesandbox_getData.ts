import { useEffect, useState } from "react";

export const HttpGet = () => {
  const [state, setState] = useState({
    coffeeListArr: []
  });

  const getData = async () => {
    const header = await fetch("https://api.sampleapis.com/coffee/hot");
    const coffeeListArr = await header.json();

    // console.log("coffeeListArr ", coffeeListArr);

    setState((prevState) => {
      return {
        ...prevState,
        coffeeListArr
      };
    });
  };

  useEffect(() => {
    getData();
    // console.log("State ", state);
  }, []);

  return { data: state.coffeeListArr };
};
