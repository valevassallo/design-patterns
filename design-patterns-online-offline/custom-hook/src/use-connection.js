import React from "react";

function useConnection() {
  const [connection, setConnection] = React.useState(true);

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

  return connection;
}

export default useConnection;
