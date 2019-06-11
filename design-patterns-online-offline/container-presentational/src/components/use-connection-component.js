import React, { useEffect, useState } from "react";

function UseConnectionDummy({ connection }) {
  return (
    <div>
      <p>Status: {connection.toString()}</p>
    </div>
  );
}

export default UseConnectionDummy;
