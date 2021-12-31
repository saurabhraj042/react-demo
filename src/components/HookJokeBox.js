import axios from "axios";
import React, { useState } from "react";

function HookJokeBox() {
  const [joke, setJoke] = useState({});
  const BASE_URL = "https://api.chucknorris.io/jokes/random";

  const jokeApiCall = () => {
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res);
        setJoke(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="centered">
      <div>
        <h1>{joke.value}</h1>
        <button onClick={() => jokeApiCall()}>Fetch Joke!</button>
      </div>
    </div>
  );
}

export default HookJokeBox;
