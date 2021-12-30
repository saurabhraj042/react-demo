import React from "react";

function Box(props) {
  const color = props.color;

  return <div className="box" style={{ backgroundColor: color }}></div>;
}

export default Box;
