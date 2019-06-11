import React from "react";

function useVisibility() {
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

  return visibility;
}

export default useVisibility;
