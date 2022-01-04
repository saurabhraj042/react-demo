import React, { useContext } from "react";
import userContext from "./UserContext";

function ContextApp() {
    const context = useContext(userContext)
  return <div>
      {context}
  </div>
}

export default ContextApp;
