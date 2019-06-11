import React from "react";
import ReactDOM from "react-dom";
import UseConnection from "./use-connection";

function App() {
  return (
    <UseConnection
      render={({ connection }) => (
        <>
          <div>
            <p>Status: {connection.toString()}</p>
          </div>
        </>
      )}
    />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
