import React, { useState } from "react";
import Box from "./Box";

const genRandomColorCode = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

function HookBox() {
  const initialState = { colorOne: `#FF0000`, colorTwo: `#00FF00` };
  const [colors, setcolors] = useState(initialState);

  const colorChangeHandler = () => {
    const randomColorOne = genRandomColorCode();
    const randomColorTwo = genRandomColorCode();

    setcolors({colorOne : randomColorOne, colorTwo : randomColorTwo});
  }

  return (
    <div className="centered">
      <div>
        <Box color={colors.colorOne} /> <Box color={colors.colorTwo} />{" "}
        <button onClick={colorChangeHandler}> Change Color </button>{" "}
      </div>{" "}
    </div>
  );
}

export default HookBox;
