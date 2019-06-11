import React from "react";
import ReactDOM from "react-dom";
import UseVisibility from "./use-visibility";

function App() {
  return (
    <UseVisibility
      render={({ visibility }) => (
        <>
          <div>
            <p>Page visibility: {visibility.toString()}</p>
          </div>
        </>
      )}
    />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
