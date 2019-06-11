import React from "react";
import ReactDOM from "react-dom";
import useConnection from "./use-connection";

function App() {
  const connection = useConnection();

  return <div>Status: {connection.toString()}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
