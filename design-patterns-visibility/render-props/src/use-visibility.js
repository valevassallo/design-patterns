import React, { useEffect, useState } from "react";

function UseVisibility({ render = children, children }) {
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
  return render({ visibility });
}

export default UseVisibility;
