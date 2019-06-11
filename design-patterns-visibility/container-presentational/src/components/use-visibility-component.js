import React, { useEffect, useState } from "react";

function UseVisibilityDummy({ visibility }) {
  return (
    <div>
      <p>Page visibility: {visibility.toString()}</p>
    </div>
  );
}

export default UseVisibilityDummy;
