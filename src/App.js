import React from "react";
import { render } from "react-dom";
import IntroductionContainer from "./components/landing/IntroductionContainer";

const App = () => {
  return (
    <React.StrictMode>
      <IntroductionContainer />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
