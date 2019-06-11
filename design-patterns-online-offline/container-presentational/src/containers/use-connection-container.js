import React, { useEffect, useState } from "react";
import UseConnectionDummy from "../components/use-connection-component";

function UseConnectionSmart() {
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
  return <UseConnectionDummy connection={connection} />;
}

export default UseConnectionSmart;
