import React from "react";
import ReactDOM from "react-dom";
import withUseVisibility from "./use-visibility";

function App({ visibility }) {
  return (
    <div>
      <p>Page visibility: {visibility.toString()}</p>
    </div>
  );
}

const VisibilityApp = withUseVisibility(App);

ReactDOM.render(<VisibilityApp />, document.getElementById("root"));
