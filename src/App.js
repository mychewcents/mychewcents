import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">React Base Setup</Link>
        </header>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
