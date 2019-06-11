import React from "react";
import ReactDOM from "react-dom";
import useVisibility from "./use-visibility";

function App() {
  const visibility = useVisibility();

  return <div>{visibility.toString()}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
