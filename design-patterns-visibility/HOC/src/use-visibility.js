import React, { useEffect, useState } from "react";

function withUseVisibility(Component) {
  function UseVisibility() {
    const [visibility, setvisibility] = useState(true);
    useEffect(() => {
      function handler() {
        if (document.hidden) {
          setvisibility(false);
          console.log("Page is not visible");
        } else {
          setvisibility(true);
          console.log("Page is visible");
        }
      }

      document.addEventListener("visibilitychange", handler);
      return () => window.removeEventListener("visibilitychange", handler);
    }, [setvisibility]);
    return <Component visibility={visibility} />;
  }
  return UseVisibility;
}

export default withUseVisibility;
