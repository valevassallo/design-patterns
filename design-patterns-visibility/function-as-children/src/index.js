import React from "react";
import ReactDOM from "react-dom";
import useVisibility from "./use-visibility";

function App() {
  return (
    <useVisibility>
      {({ visibility }) => <div>{visibility.toString()}</div>}
    </useVisibility>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
