import React from "react";

function useVisibility({ children }) {
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    function handler() {
      if (document.hidden) {
        console.log("Page is not visible");
        setVisibility(false);
      } else {
        console.log("Page is visible");
        setVisibility(true);
      }
    }
    window.addEventListener("visibilitychange", handler);
    return () => window.removeEventListener(handler);
  }, [setVisibility]);

  return children({ visibility });
}

export default useVisibility;
