import React, { useState } from "react";

function UseConnection({ children }) {
  const [connection, setConnection] = useState(true);

  React.useEffect(() => {
    function handler() {
      if (navigator.onLine) {
        console.log("online");
        setConnection(true);
      } else {
        console.log("offline");
        setConnection(false);
      }
    }
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => window.removeEventListener(handler);
  }, [setConnection]);

  return children({ connection });
}

export default UseConnection;
