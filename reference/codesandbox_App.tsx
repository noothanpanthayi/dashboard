import "./styles.css";
import React from "react";

import { HttpGet } from "./getData";

export default function App() {
  const { data } = HttpGet();

  return (
    <>
      <div className="App">
        <div className="grid">
          <div>Id</div>
          <div>Title</div>
          <div>Description</div>
          {data.map(({ id, title, description }) => {
            return (
              <React.Fragment key={id}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{description}</div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
