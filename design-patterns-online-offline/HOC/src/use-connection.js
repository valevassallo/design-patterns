import React, { useEffect, useState } from "react";

function withUseConnection(Component) {
  function UseConnection() {
    const [connection, setConnection] = useState(true);
    useEffect(() => {
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
    return <Component connection={connection} />;
  }
  return UseConnection;
}

export default withUseConnection;
