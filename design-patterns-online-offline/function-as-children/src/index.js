import React from "react";
import ReactDOM from "react-dom";
import UseConnection from "./use-connection";

function App() {
  return (
    <UseConnection>
      {({ connection }) => <div>Status: {connection.toString()}</div>}
    </UseConnection>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
