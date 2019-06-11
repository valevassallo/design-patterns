import React from "react";
import ReactDOM from "react-dom";
import withUseConnection from "./use-connection";

function App({ connection }) {
  return (
    <div>
      <p>Status: {connection.toString()}</p>
    </div>
  );
}

const ConnectionApp = withUseConnection(App);

ReactDOM.render(<ConnectionApp />, document.getElementById("root"));
